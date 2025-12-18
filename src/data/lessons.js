// Simple 3-month (90-day) plan focused on N5 then early N4.
// The first couple of weeks are detailed; later days are structured reviews
// that you can easily customize for yourself.

export const lessons = [
  {
    id: 1,
    dayNumber: 1,
    level: "N5",
    title: "Hiragana & Basic Greetings",
    grammarPoints: [
      {
        name: "です (desu)",
        explanation: "Polite 'to be'. Used to state what something is.",
        examples: [
          { ja: "わたしは ジアペン です。", en: "I am Jiapeng." },
          { ja: "これは ほん です。", en: "This is a book." }
        ]
      }
    ],
    vocabulary: [
      {
        word: "こんにちは",
        reading: "konnichiwa",
        meaning: "hello / good afternoon",
        exampleJa: "こんにちは、はじめまして。",
        exampleEn: "Hello, nice to meet you."
      },
      {
        word: "おはよう",
        reading: "ohayou",
        meaning: "good morning (casual)",
        exampleJa: "おはよう、げんき？",
        exampleEn: "Good morning, how are you?"
      },
      {
        word: "こんばんは",
        reading: "konbanwa",
        meaning: "good evening",
        exampleJa: "こんばんは、いいゆうがたですね。",
        exampleEn: "Good evening, it’s a nice evening."
      },
      {
        word: "さようなら",
        reading: "sayounara",
        meaning: "goodbye",
        exampleJa: "きょうは ここまで。さようなら。",
        exampleEn: "That’s all for today. Goodbye."
      },
      {
        word: "ありがとう",
        reading: "arigatou",
        meaning: "thank you",
        exampleJa: "てつだってくれて、ありがとう。",
        exampleEn: "Thank you for helping me."
      }
    ],
    notes: "Focus on hiragana あ〜お, か〜こ and get used to です in simple sentences."
  },
  {
    id: 2,
    dayNumber: 2,
    level: "N5",
    title: "Hiragana & Name / Country",
    grammarPoints: [
      {
        name: "〜は 〜です",
        explanation: "Basic A is B sentence. は marks the topic.",
        examples: [
          { ja: "わたしは がくせい です。", en: "I am a student." },
          { ja: "にほんごは おもしろい です。", en: "Japanese is interesting." }
        ]
      }
    ],
    vocabulary: [
      {
        word: "わたし",
        reading: "watashi",
        meaning: "I, me",
        exampleJa: "わたしは ニュージーランドじん です。",
        exampleEn: "I am New Zealander."
      },
      {
        word: "あなた",
        reading: "anata",
        meaning: "you",
        exampleJa: "あなたは がくせい ですか。",
        exampleEn: "Are you a student?"
      },
      {
        word: "にほん",
        reading: "nihon",
        meaning: "Japan",
        exampleJa: "にほんは きれいな くに です。",
        exampleEn: "Japan is a beautiful country."
      },
      {
        word: "ニュージーランド",
        reading: "nyūjīrando",
        meaning: "New Zealand",
        exampleJa: "ニュージーランドは しぜんが ゆたか です。",
        exampleEn: "New Zealand has rich nature."
      },
      {
        word: "がくせい",
        reading: "gakusei",
        meaning: "student",
        exampleJa: "かれは がくせい です。",
        exampleEn: "He is a student."
      }
    ],
    notes: "Practice self-introduction: name, country, job using 〜は〜です."
  },
  {
    id: 3,
    dayNumber: 3,
    level: "N5",
    title: "Particles は and も",
    grammarPoints: [
      {
        name: "〜も (mo)",
        explanation: "Means 'also / too'. Replaces は after the same topic.",
        examples: [
          { ja: "わたしは がくせいです。かれも がくせいです。", en: "I am a student. He is also a student." },
          { ja: "にほんごも えいごも はなします。", en: "I speak both Japanese and English." }
        ]
      }
    ],
    vocabulary: [
      {
        word: "せんせい",
        reading: "sensei",
        meaning: "teacher",
        exampleJa: "あのひとは せんせいです。",
        exampleEn: "That person is a teacher."
      },
      {
        word: "かいしゃいん",
        reading: "kaishain",
        meaning: "office worker",
        exampleJa: "ちちは かいしゃいんです。",
        exampleEn: "My father is an office worker."
      },
      {
        word: "エンジニア",
        reading: "enjiniya",
        meaning: "engineer",
        exampleJa: "わたしは エンジニアです。",
        exampleEn: "I am an engineer."
      },
      {
        word: "いしゃ",
        reading: "isha",
        meaning: "doctor",
        exampleJa: "あねは いしゃです。",
        exampleEn: "My older sister is a doctor."
      },
      {
        word: "がくこう",
        reading: "gakkou",
        meaning: "school",
        exampleJa: "あした がっこうへ いきます。",
        exampleEn: "I will go to school tomorrow."
      }
    ],
    notes: "Make 5 sentences with 〜も to compare yourself and another person."
  },
  {
    id: 4,
    dayNumber: 4,
    level: "N5",
    title: "This / That (こそあど)",
    grammarPoints: [
      {
        name: "これ / それ / あれ",
        explanation: "Demonstratives: this, that (near listener), that (far from both).",
        examples: [
          { ja: "これは ほんです。", en: "This is a book." },
          { ja: "それは なんですか。", en: "What is that?" },
          { ja: "あれは やまです。", en: "That over there is a mountain." }
        ]
      }
    ],
    vocabulary: [
      {
        word: "これ",
        reading: "kore",
        meaning: "this (thing near me)",
        exampleJa: "これは わたしの ペンです。",
        exampleEn: "This is my pen."
      },
      {
        word: "それ",
        reading: "sore",
        meaning: "that (near you)",
        exampleJa: "それは だれの かばんですか。",
        exampleEn: "Whose bag is that?"
      },
      {
        word: "あれ",
        reading: "are",
        meaning: "that (over there)",
        exampleJa: "あれは こうこうです。",
        exampleEn: "That over there is a high school."
      },
      {
        word: "どれ",
        reading: "dore",
        meaning: "which (of three or more)",
        exampleJa: "ペンは どれですか。",
        exampleEn: "Which one is the pen?"
      },
      {
        word: "ペン",
        reading: "pen",
        meaning: "pen",
        exampleJa: "あかい ペンを ください。",
        exampleEn: "Please give me the red pen."
      }
    ],
    notes: "Practice asking and answering 'これはなんですか' using items around you."
  },
  {
    id: 5,
    dayNumber: 5,
    level: "N5",
    title: "Possession with の",
    grammarPoints: [
      {
        name: "A の B",
        explanation: "Shows possession or relationship (A's B).",
        examples: [
          { ja: "わたしの なまえ", en: "my name" },
          { ja: "にほんの たべもの", en: "Japanese food" }
        ]
      }
    ],
    vocabulary: [
      {
        word: "なまえ",
        reading: "namae",
        meaning: "name",
        exampleJa: "あなたの なまえは なんですか。",
        exampleEn: "What is your name?"
      },
      {
        word: "ともだち",
        reading: "tomodachi",
        meaning: "friend",
        exampleJa: "にほんじんの ともだちが います。",
        exampleEn: "I have a Japanese friend."
      },
      {
        word: "かぞく",
        reading: "kazoku",
        meaning: "family",
        exampleJa: "かぞくの しゃしんを みせてください。",
        exampleEn: "Please show me a picture of your family."
      },
      {
        word: "いえ",
        reading: "ie",
        meaning: "house, home",
        exampleJa: "わたしの いえは えきの ちかくです。",
        exampleEn: "My house is near the station."
      },
      {
        word: "はは",
        reading: "haha",
        meaning: "mother (my own)",
        exampleJa: "ははの たんじょうびは ５がつです。",
        exampleEn: "My mother’s birthday is in May."
      }
    ],
    notes: "Write 10 'AのB' phrases about your own life (family, job, hobbies)."
  },
  {
    id: 6,
    dayNumber: 6,
    level: "N5",
    title: "Basic Verb Dictionary Form",
    grammarPoints: [
      {
        name: "Verb dictionary form",
        explanation: "Plain form used in dictionaries; base for conjugations.",
        examples: [
          { ja: "いく (to go)", en: "Dictionary form" },
          { ja: "たべる (to eat)", en: "Dictionary form" }
        ]
      }
    ],
    vocabulary: [
      {
        word: "いく",
        reading: "iku",
        meaning: "to go",
        exampleJa: "まいにち がっこうへ いく。",
        exampleEn: "I go to school every day."
      },
      {
        word: "たべる",
        reading: "taberu",
        meaning: "to eat",
        exampleJa: "パンを たべる。",
        exampleEn: "I eat bread."
      },
      {
        word: "のむ",
        reading: "nomu",
        meaning: "to drink",
        exampleJa: "みずを のむ。",
        exampleEn: "I drink water."
      },
      {
        word: "よむ",
        reading: "yomu",
        meaning: "to read",
        exampleJa: "ほんを よむ。",
        exampleEn: "I read a book."
      },
      {
        word: "みる",
        reading: "miru",
        meaning: "to see / watch",
        exampleJa: "えいがを みる。",
        exampleEn: "I watch a movie."
      }
    ],
    notes: "Shadow-read each verb aloud 10 times and make your own example sentences."
  },
  {
    id: 7,
    dayNumber: 7,
    level: "N5",
    title: "Past Tense ～ました",
    grammarPoints: [
      {
        name: "〜ました (polite past)",
        explanation: "Past form of 〜ます; used for completed actions.",
        examples: [
          { ja: "きのう えいがを みました。", en: "I watched a movie yesterday." },
          { ja: "あさ ごはんを たべました。", en: "I ate breakfast this morning." }
        ]
      }
    ],
    vocabulary: [
      {
        word: "きのう",
        reading: "kinou",
        meaning: "yesterday",
        exampleJa: "きのう ともだちに あいました。",
        exampleEn: "I met a friend yesterday."
      },
      {
        word: "きょう",
        reading: "kyou",
        meaning: "today",
        exampleJa: "きょうは にほんごを べんきょうしました。",
        exampleEn: "I studied Japanese today."
      },
      {
        word: "あした",
        reading: "ashita",
        meaning: "tomorrow",
        exampleJa: "あした にほんごの クラスが あります。",
        exampleEn: "There is Japanese class tomorrow."
      },
      {
        word: "べんきょうする",
        reading: "benkyou suru",
        meaning: "to study",
        exampleJa: "まいにち にほんごを べんきょうする。",
        exampleEn: "I study Japanese every day."
      },
      {
        word: "あう",
        reading: "au",
        meaning: "to meet",
        exampleJa: "ともだちに あう。",
        exampleEn: "I meet a friend."
      }
    ],
    notes: "Write what you did yesterday using 〜ました for at least 5 actions."
  }
];

// Generate a full 90‑day plan by extending the detailed first week
// with structured review / light new content days. You can overwrite
// any auto-generated day later with your own detailed plan.
const TOTAL_DAYS = 90;

export const fullPlan = Array.from({ length: TOTAL_DAYS }, (_, i) => {
  const dayNumber = i + 1;
  const base = lessons.find((d) => d.dayNumber === dayNumber);

  if (base) return base;

  const isReviewDay = dayNumber % 7 === 0;
  const level = dayNumber <= 60 ? "N5" : "N4";

  if (isReviewDay) {
    return {
      id: dayNumber,
      dayNumber,
      level,
      title: `Review & Shadowing Day ${dayNumber}`,
      grammarPoints: [
        {
          name: "Review recent grammar",
          explanation:
            "Go back over the last 6 days, re‑read example sentences, and shadow aloud.",
          examples: []
        }
      ],
      vocabulary: [],
      notes:
        "Use this day to review Anki/flashcards, re‑read example sentences, and practice reading out loud."
    };
  }

  return {
    id: dayNumber,
    dayNumber,
    level,
    title: `${level} Study Day ${dayNumber}`,
    grammarPoints: [],
    vocabulary: [],
    notes:
      "Customizable slot: add new grammar/vocabulary you want to focus on for this day."
  };
});


