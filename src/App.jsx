import { useState } from "react";
import { fullPlan } from "./data/lessons.js";
import { nanoPlan } from "./data/nanoLessons.js";
import "./App.css";

function App() {
  const [activePlan, setActivePlan] = useState("main"); // main | nano
  const [selectedDay, setSelectedDay] = useState(1);

  const planData = activePlan === "main" ? fullPlan : nanoPlan;

  const handleSelectDay = (dayNumber) => {
    setSelectedDay(dayNumber);
  };

  const handlePlanChange = (plan) => {
    setActivePlan(plan);
    setSelectedDay(1);
  };

  const todayLesson = planData.find((d) => d.dayNumber === selectedDay);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <h1>Japanese N5 &amp; N4 – 3 Month Planner</h1>
          <p className="subtitle">
            Click a day to see today&apos;s grammar, vocabulary, and example sentences.
          </p>
        </div>
        <div className="tab-row">
          <button
            type="button"
            className={["tab-pill", activePlan === "main" ? "tab-pill--active" : ""].join(" ")}
            onClick={() => handlePlanChange("main")}
          >
            Main Plan
          </button>
          <button
            type="button"
            className={["tab-pill", activePlan === "nano" ? "tab-pill--active" : ""].join(" ")}
            onClick={() => handlePlanChange("nano")}
          >
            For Nano
          </button>
        </div>
      </header>

      <main className="app-main">
        <section className="day-list">
          <div className="day-list-header">
            <h2>Days</h2>
            <p>{planData.length} days total</p>
          </div>
          <div className="day-grid">
            {planData.map((lesson) => (
              <button
                key={lesson.id}
                type="button"
                className={[
                  "day-button",
                  selectedDay === lesson.dayNumber ? "day-button--active" : "",
                  lesson.level === "N4" ? "day-button--n4" : "day-button--n5"
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleSelectDay(lesson.dayNumber)}
              >
                <span className="day-number">Day {lesson.dayNumber}</span>
                <span className="day-level">{lesson.level}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="lesson-panel">
          {todayLesson ? (
            <>
              <header className="lesson-header">
                <div>
                  <p className="lesson-day-label">
                    Day {todayLesson.dayNumber} · {todayLesson.level}
                  </p>
                  <h2>{todayLesson.title}</h2>
                </div>
              </header>

              <div className="lesson-content">
                <section className="lesson-section">
                  <h3>Grammar</h3>
                  {todayLesson.grammarPoints && todayLesson.grammarPoints.length > 0 ? (
                    <ul className="grammar-list">
                      {todayLesson.grammarPoints.map((g, idx) => (
                        <li key={idx} className="grammar-item">
                          <h4>{g.name}</h4>
                          <p className="grammar-explanation">{g.explanation}</p>
                          {g.examples && g.examples.length > 0 && (
                            <ul className="example-list">
                              {g.examples.map((ex, i) => (
                                <li key={i}>
                                  <p className="example-ja">{ex.ja}</p>
                                  <p className="example-en">{ex.en}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="placeholder">
                      No grammar points defined yet for this day. Add your own notes here.
                    </p>
                  )}
                </section>

                <section className="lesson-section">
                  <h3>Vocabulary</h3>
                  {todayLesson.vocabulary && todayLesson.vocabulary.length > 0 ? (
                    <div className="vocab-table-wrapper">
                      <table className="vocab-table">
                        <thead>
                          <tr>
                            <th>Word</th>
                            <th>Reading</th>
                            <th>Meaning</th>
                            <th>Example (JP)</th>
                            <th>Example (EN)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {todayLesson.vocabulary.map((v, idx) => (
                            <tr key={idx}>
                              <td>{v.word}</td>
                              <td>{v.reading}</td>
                              <td>{v.meaning}</td>
                              <td className="jp">{v.exampleJa}</td>
                              <td>{v.exampleEn}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="placeholder">
                      No vocabulary defined yet for this day. Choose words you want to focus on.
                    </p>
                  )}
                </section>

                <section className="lesson-section">
                  <h3>Study Notes</h3>
                  <p className="notes">{todayLesson.notes}</p>
                </section>
              </div>
            </>
          ) : (
            <p>Pick a day from the list on the left.</p>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>Built for your personal Japanese learning journey · N5 → N4 in 3 months</p>
      </footer>
    </div>
  );
}

export default App;


