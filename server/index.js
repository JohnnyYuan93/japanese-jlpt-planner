import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "db.sqlite");

const db = new Database(dbPath);

db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS progress (
    day INTEGER PRIMARY KEY,
    status TEXT NOT NULL DEFAULT 'not_started',
    notes TEXT DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const VALID_STATUS = new Set(["not_started", "in_progress", "done"]);

const normalizeDay = (value) => {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1 || n > 365) return null;
  return n;
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/api/progress", (_req, res) => {
  const rows = db
    .prepare("SELECT day, status, notes, updated_at as updatedAt FROM progress ORDER BY day ASC")
    .all();
  res.json({ data: rows });
});

app.get("/api/progress/:day", (req, res) => {
  const day = normalizeDay(req.params.day);
  if (!day) return res.status(400).json({ error: "Invalid day" });

  const row = db
    .prepare("SELECT day, status, notes, updated_at as updatedAt FROM progress WHERE day = ?")
    .get(day);

  if (!row) {
    return res.json({
      data: { day, status: "not_started", notes: "", updatedAt: null }
    });
  }

  res.json({ data: row });
});

app.put("/api/progress/:day", (req, res) => {
  const day = normalizeDay(req.params.day);
  if (!day) return res.status(400).json({ error: "Invalid day" });

  const { status, notes } = req.body || {};

  if (!VALID_STATUS.has(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  const safeNotes = typeof notes === "string" ? notes.slice(0, 5000) : "";

  db.prepare(
    `
    INSERT INTO progress (day, status, notes, updated_at)
    VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(day) DO UPDATE SET
      status = excluded.status,
      notes = excluded.notes,
      updated_at = excluded.updated_at;
  `
  ).run(day, status, safeNotes);

  const updated = db
    .prepare("SELECT day, status, notes, updated_at as updatedAt FROM progress WHERE day = ?")
    .get(day);

  res.json({ data: updated });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});


