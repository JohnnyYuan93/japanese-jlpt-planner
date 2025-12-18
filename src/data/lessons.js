export const lessons = [
    {
      id: "lesson-001",
      dayNumber: 1,
      level: "N5",
      title: "Core Grammar & Basic Vocabulary",
      grammarPoints: [
        {
          name: "です (desu)",
          explanation: "Polite copula 'to be', used to state what something/someone is",
          examples: [
            { ja: "私は学生です。", en: "I am a student." },
            { ja: "これは本です。", en: "This is a book." },
            { ja: "田中さんは先生です。", en: "Mr. Tanaka is a teacher." }
          ]
        },
        {
          name: "は (wa) - Topic Marker",
          explanation: "Marks the topic of the sentence (what you're talking about)",
          examples: [
            { ja: "日本は国です。", en: "Japan is a country." },
            { ja: "私は日本人です。", en: "I am Japanese." },
            { ja: "今日は月曜日です。", en: "Today is Monday." }
          ]
        }
      ],
      vocabulary: [
        { word: "私", reading: "わたし", meaning: "I, me", exampleJa: "私は学生です。", exampleEn: "I am a student." },
        { word: "あなた", reading: "あなた", meaning: "you", exampleJa: "あなたは先生ですか。", exampleEn: "Are you a teacher?" },
        { word: "これ", reading: "これ", meaning: "this", exampleJa: "これは本です。", exampleEn: "This is a book." },
        { word: "それ", reading: "それ", meaning: "that", exampleJa: "それは何ですか。", exampleEn: "What is that?" },
        { word: "人", reading: "ひと", meaning: "person", exampleJa: "あの人は誰ですか。", exampleEn: "Who is that person?" },
        { word: "学生", reading: "がくせい", meaning: "student", exampleJa: "私は学生です。", exampleEn: "I am a student." },
        { word: "先生", reading: "せんせい", meaning: "teacher", exampleJa: "田中先生です。", exampleEn: "This is Teacher Tanaka." },
        { word: "本", reading: "ほん", meaning: "book", exampleJa: "これは本です。", exampleEn: "This is a book." },
        { word: "国", reading: "くに", meaning: "country", exampleJa: "日本は国です。", exampleEn: "Japan is a country." },
        { word: "日本", reading: "にほん", meaning: "Japan", exampleJa: "日本は美しいです。", exampleEn: "Japan is beautiful." },
        { word: "今日", reading: "きょう", meaning: "today", exampleJa: "今日は月曜日です。", exampleEn: "Today is Monday." },
        { word: "月曜日", reading: "げつようび", meaning: "Monday", exampleJa: "今日は月曜日です。", exampleEn: "Today is Monday." },
        { word: "日本人", reading: "にほんじん", meaning: "Japanese person", exampleJa: "私は日本人です。", exampleEn: "I am Japanese." }
      ]
    },
    {
      id: "lesson-002",
      dayNumber: 2,
      level: "N5",
      title: "Object & Subject Markers",
      grammarPoints: [
        {
          name: "を (o) - Object Marker",
          explanation: "Marks the direct object of an action (what receives the action)",
          examples: [
            { ja: "私は本を読みます。", en: "I read a book." },
            { ja: "コーヒーを飲みます。", en: "I drink coffee." },
            { ja: "日本語を勉強します。", en: "I study Japanese." }
          ]
        },
        {
          name: "が (ga) - Subject Marker",
          explanation: "Marks the subject doing the action (emphasizes who or what)",
          examples: [
            { ja: "犬がいます。", en: "There is a dog." },
            { ja: "私が田中です。", en: "I am Tanaka." },
            { ja: "雨が降ります。", en: "It rains." }
          ]
        }
      ],
      vocabulary: [
        { word: "読みます", reading: "よみます", meaning: "to read", exampleJa: "本を読みます。", exampleEn: "I read a book." },
        { word: "書きます", reading: "かきます", meaning: "to write", exampleJa: "手紙を書きます。", exampleEn: "I write a letter." },
        { word: "食べます", reading: "たべます", meaning: "to eat", exampleJa: "ご飯を食べます。", exampleEn: "I eat rice." },
        { word: "飲みます", reading: "のみます", meaning: "to drink", exampleJa: "水を飲みます。", exampleEn: "I drink water." },
        { word: "見ます", reading: "みます", meaning: "to see, watch", exampleJa: "テレビを見ます。", exampleEn: "I watch TV." },
        { word: "勉強します", reading: "べんきょうします", meaning: "to study", exampleJa: "日本語を勉強します。", exampleEn: "I study Japanese." },
        { word: "コーヒー", reading: "コーヒー", meaning: "coffee", exampleJa: "コーヒーを飲みます。", exampleEn: "I drink coffee." },
        { word: "水", reading: "みず", meaning: "water", exampleJa: "水を飲みます。", exampleEn: "I drink water." },
        { word: "ご飯", reading: "ごはん", meaning: "rice, meal", exampleJa: "ご飯を食べます。", exampleEn: "I eat rice." },
        { word: "日本語", reading: "にほんご", meaning: "Japanese language", exampleJa: "日本語を勉強します。", exampleEn: "I study Japanese." },
        { word: "英語", reading: "えいご", meaning: "English language", exampleJa: "英語を話します。", exampleEn: "I speak English." },
        { word: "犬", reading: "いぬ", meaning: "dog", exampleJa: "犬がいます。", exampleEn: "There is a dog." },
        { word: "猫", reading: "ねこ", meaning: "cat", exampleJa: "猫がいます。", exampleEn: "There is a cat." }
      ]
    },
    {
      id: "lesson-003",
      dayNumber: 3,
      level: "N5",
      title: "Location & Time Markers",
      grammarPoints: [
        {
          name: "に (ni) - Time/Location Marker",
          explanation: "Marks specific time or destination/location where something exists",
          examples: [
            { ja: "七時に起きます。", en: "I wake up at 7 o'clock." },
            { ja: "東京に行きます。", en: "I go to Tokyo." },
            { ja: "部屋に猫がいます。", en: "There is a cat in the room." }
          ]
        },
        {
          name: "で (de) - Location of Action",
          explanation: "Marks the location where an action takes place",
          examples: [
            { ja: "学校で勉強します。", en: "I study at school." },
            { ja: "レストランで食べます。", en: "I eat at a restaurant." },
            { ja: "図書館で本を読みます。", en: "I read books at the library." }
          ]
        }
      ],
      vocabulary: [
        { word: "行きます", reading: "いきます", meaning: "to go", exampleJa: "学校に行きます。", exampleEn: "I go to school." },
        { word: "来ます", reading: "きます", meaning: "to come", exampleJa: "友達が来ます。", exampleEn: "My friend comes." },
        { word: "います", reading: "います", meaning: "to exist (living)", exampleJa: "部屋に犬がいます。", exampleEn: "There is a dog in the room." },
        { word: "あります", reading: "あります", meaning: "to exist (non-living)", exampleJa: "机の上に本があります。", exampleEn: "There is a book on the desk." },
        { word: "学校", reading: "がっこう", meaning: "school", exampleJa: "学校に行きます。", exampleEn: "I go to school." },
        { word: "家", reading: "いえ", meaning: "house, home", exampleJa: "家にいます。", exampleEn: "I'm at home." },
        { word: "部屋", reading: "へや", meaning: "room", exampleJa: "部屋にいます。", exampleEn: "I'm in the room." },
        { word: "東京", reading: "とうきょう", meaning: "Tokyo", exampleJa: "東京に住んでいます。", exampleEn: "I live in Tokyo." },
        { word: "駅", reading: "えき", meaning: "station", exampleJa: "駅に行きます。", exampleEn: "I go to the station." },
        { word: "時", reading: "じ", meaning: "o'clock", exampleJa: "三時です。", exampleEn: "It's 3 o'clock." },
        { word: "今", reading: "いま", meaning: "now", exampleJa: "今、勉強します。", exampleEn: "I study now." },
        { word: "朝", reading: "あさ", meaning: "morning", exampleJa: "朝ご飯を食べます。", exampleEn: "I eat breakfast." }
      ]
    },
    {
      id: "lesson-004",
      dayNumber: 4,
      level: "N5",
      title: "Possession & Questions",
      grammarPoints: [
        {
          name: "の (no) - Possession/Modification",
          explanation: "Links nouns to show possession or modification",
          examples: [
            { ja: "私の本です。", en: "It's my book." },
            { ja: "日本の車です。", en: "It's a Japanese car." },
            { ja: "友達の家に行きます。", en: "I go to my friend's house." }
          ]
        },
        {
          name: "か (ka) - Question Marker",
          explanation: "Placed at the end of a sentence to make it a question",
          examples: [
            { ja: "学生ですか。", en: "Are you a student?" },
            { ja: "これは何ですか。", en: "What is this?" },
            { ja: "日本語を勉強しますか。", en: "Do you study Japanese?" }
          ]
        }
      ],
      vocabulary: [
        { word: "友達", reading: "ともだち", meaning: "friend", exampleJa: "友達と遊びます。", exampleEn: "I play with friends." },
        { word: "車", reading: "くるま", meaning: "car", exampleJa: "車で行きます。", exampleEn: "I go by car." },
        { word: "何", reading: "なに/なん", meaning: "what", exampleJa: "これは何ですか。", exampleEn: "What is this?" },
        { word: "誰", reading: "だれ", meaning: "who", exampleJa: "あの人は誰ですか。", exampleEn: "Who is that person?" },
        { word: "どこ", reading: "どこ", meaning: "where", exampleJa: "どこに行きますか。", exampleEn: "Where are you going?" },
        { word: "いつ", reading: "いつ", meaning: "when", exampleJa: "いつ行きますか。", exampleEn: "When are you going?" },
        { word: "会社", reading: "かいしゃ", meaning: "company", exampleJa: "会社に行きます。", exampleEn: "I go to the company." },
        { word: "銀行", reading: "ぎんこう", meaning: "bank", exampleJa: "銀行に行きます。", exampleEn: "I go to the bank." },
        { word: "郵便局", reading: "ゆうびんきょく", meaning: "post office", exampleJa: "郵便局で働きます。", exampleEn: "I work at the post office." },
        { word: "病院", reading: "びょういん", meaning: "hospital", exampleJa: "病院に行きます。", exampleEn: "I go to the hospital." }
      ]
    },
    {
      id: "lesson-005",
      dayNumber: 5,
      level: "N5",
      title: "Also & With Particles",
      grammarPoints: [
        {
          name: "も (mo) - Also, Too",
          explanation: "Replaces は/が/を to mean 'also' or 'too'",
          examples: [
            { ja: "私も学生です。", en: "I am also a student." },
            { ja: "これも本です。", en: "This is also a book." },
            { ja: "コーヒーも飲みます。", en: "I also drink coffee." }
          ]
        },
        {
          name: "と (to) - And/With",
          explanation: "Connects nouns meaning 'and', or means 'with' (company)",
          examples: [
            { ja: "本とペンがあります。", en: "There are books and pens." },
            { ja: "友達と行きます。", en: "I go with my friend." },
            { ja: "犬と猫がいます。", en: "There are dogs and cats." }
          ]
        }
      ],
      vocabulary: [
        { word: "ペン", reading: "ペン", meaning: "pen", exampleJa: "ペンで書きます。", exampleEn: "I write with a pen." },
        { word: "鉛筆", reading: "えんぴつ", meaning: "pencil", exampleJa: "鉛筆で書きます。", exampleEn: "I write with a pencil." },
        { word: "紙", reading: "かみ", meaning: "paper", exampleJa: "紙に書きます。", exampleEn: "I write on paper." },
        { word: "机", reading: "つくえ", meaning: "desk", exampleJa: "机の上に本があります。", exampleEn: "There is a book on the desk." },
        { word: "椅子", reading: "いす", meaning: "chair", exampleJa: "椅子に座ります。", exampleEn: "I sit on a chair." },
        { word: "窓", reading: "まど", meaning: "window", exampleJa: "窓を開けます。", exampleEn: "I open the window." },
        { word: "ドア", reading: "ドア", meaning: "door", exampleJa: "ドアを閉めます。", exampleEn: "I close the door." },
        { word: "買います", reading: "かいます", meaning: "to buy", exampleJa: "本を買います。", exampleEn: "I buy a book." },
        { word: "売ります", reading: "うります", meaning: "to sell", exampleJa: "車を売ります。", exampleEn: "I sell a car." }
      ]
    },
    {
      id: "lesson-006",
      dayNumber: 6,
      level: "N5",
      title: "Verb Groups Introduction",
      grammarPoints: [
        {
          name: "U-verbs (Group 1)",
          explanation: "Verbs ending in う sounds (う、く、ぐ、す、つ、ぬ、ぶ、む、る)",
          examples: [
            { ja: "話します (to speak)", en: "from 話す" },
            { ja: "書きます (to write)", en: "from 書く" },
            { ja: "泳ぎます (to swim)", en: "from 泳ぐ" }
          ]
        },
        {
          name: "Ru-verbs (Group 2)",
          explanation: "Verbs ending in る with い or え sound before る",
          examples: [
            { ja: "食べます (to eat)", en: "from 食べる" },
            { ja: "見ます (to see)", en: "from 見る" },
            { ja: "寝ます (to sleep)", en: "from 寝る" }
          ]
        }
      ],
      vocabulary: [
        { word: "話します", reading: "はなします", meaning: "to speak", exampleJa: "日本語を話します。", exampleEn: "I speak Japanese." },
        { word: "聞きます", reading: "ききます", meaning: "to listen, hear", exampleJa: "音楽を聞きます。", exampleEn: "I listen to music." },
        { word: "作ります", reading: "つくります", meaning: "to make", exampleJa: "料理を作ります。", exampleEn: "I make food." },
        { word: "撮ります", reading: "とります", meaning: "to take (photo)", exampleJa: "写真を撮ります。", exampleEn: "I take photos." },
        { word: "待ちます", reading: "まちます", meaning: "to wait", exampleJa: "友達を待ちます。", exampleEn: "I wait for my friend." },
        { word: "寝ます", reading: "ねます", meaning: "to sleep", exampleJa: "十時に寝ます。", exampleEn: "I sleep at 10 o'clock." },
        { word: "起きます", reading: "おきます", meaning: "to wake up", exampleJa: "朝六時に起きます。", exampleEn: "I wake up at 6 AM." },
        { word: "開けます", reading: "あけます", meaning: "to open", exampleJa: "窓を開けます。", exampleEn: "I open the window." },
        { word: "閉めます", reading: "しめます", meaning: "to close", exampleJa: "ドアを閉めます。", exampleEn: "I close the door." }
      ]
    },
    {
      id: "lesson-007",
      dayNumber: 7,
      level: "N5",
      title: "Week 1 Review",
      grammarPoints: [
        {
          name: "Review: All Particles",
          explanation: "は、が、を、に、で、の、か、も、と",
          examples: [
            { ja: "私は学生です。", en: "I am a student." },
            { ja: "本を読みます。", en: "I read a book." },
            { ja: "学校で勉強します。", en: "I study at school." }
          ]
        }
      ],
      vocabulary: [
        { word: "毎日", reading: "まいにち", meaning: "every day", exampleJa: "毎日勉強します。", exampleEn: "I study every day." },
        { word: "時々", reading: "ときどき", meaning: "sometimes", exampleJa: "時々映画を見ます。", exampleEn: "I sometimes watch movies." },
        { word: "よく", reading: "よく", meaning: "often, well", exampleJa: "よく本を読みます。", exampleEn: "I often read books." },
        { word: "いつも", reading: "いつも", meaning: "always", exampleJa: "いつも朝ご飯を食べます。", exampleEn: "I always eat breakfast." },
        { word: "たくさん", reading: "たくさん", meaning: "a lot, many", exampleJa: "たくさん勉強します。", exampleEn: "I study a lot." },
        { word: "少し", reading: "すこし", meaning: "a little", exampleJa: "少し休みます。", exampleEn: "I rest a little." },
        { word: "全然", reading: "ぜんぜん", meaning: "not at all", exampleJa: "全然分かりません。", exampleEn: "I don't understand at all." }
      ]
    },
    {
      id: "lesson-008",
      dayNumber: 8,
      level: "N5",
      title: "Present Tense Polite",
      grammarPoints: [
        {
          name: "～ます (Present/Future)",
          explanation: "Polite present or future tense for verbs",
          examples: [
            { ja: "明日学校に行きます。", en: "I will go to school tomorrow." },
            { ja: "毎日勉強します。", en: "I study every day." },
            { ja: "今、テレビを見ます。", en: "I watch TV now." }
          ]
        }
      ],
      vocabulary: [
        { word: "明日", reading: "あした", meaning: "tomorrow", exampleJa: "明日学校に行きます。", exampleEn: "I go to school tomorrow." },
        { word: "昨日", reading: "きのう", meaning: "yesterday", exampleJa: "昨日映画を見ました。", exampleEn: "I watched a movie yesterday." },
        { word: "一昨日", reading: "おととい", meaning: "day before yesterday", exampleJa: "一昨日東京に行きました。", exampleEn: "I went to Tokyo the day before yesterday." },
        { word: "明後日", reading: "あさって", meaning: "day after tomorrow", exampleJa: "明後日試験があります。", exampleEn: "There is an exam the day after tomorrow." },
        { word: "火曜日", reading: "かようび", meaning: "Tuesday", exampleJa: "火曜日に会います。", exampleEn: "We meet on Tuesday." },
        { word: "水曜日", reading: "すいようび", meaning: "Wednesday", exampleJa: "水曜日は休みです。", exampleEn: "Wednesday is a day off." },
        { word: "木曜日", reading: "もくようび", meaning: "Thursday", exampleJa: "木曜日にテストがあります。", exampleEn: "There is a test on Thursday." },
        { word: "金曜日", reading: "きんようび", meaning: "Friday", exampleJa: "金曜日に映画を見ます。", exampleEn: "I watch a movie on Friday." },
        { word: "土曜日", reading: "どようび", meaning: "Saturday", exampleJa: "土曜日は休みです。", exampleEn: "Saturday is a holiday." },
        { word: "日曜日", reading: "にちようび", meaning: "Sunday", exampleJa: "日曜日に家族と会います。", exampleEn: "I meet my family on Sunday." }
      ]
    },
    {
      id: "lesson-009",
      dayNumber: 9,
      level: "N5",
      title: "Past Tense Polite",
      grammarPoints: [
        {
          name: "～ました (Past)",
          explanation: "Polite past tense for verbs",
          examples: [
            { ja: "昨日学校に行きました。", en: "I went to school yesterday." },
            { ja: "朝ご飯を食べました。", en: "I ate breakfast." },
            { ja: "友達と話しました。", en: "I talked with my friend." }
          ]
        }
      ],
      vocabulary: [
        { word: "先週", reading: "せんしゅう", meaning: "last week", exampleJa: "先週京都に行きました。", exampleEn: "I went to Kyoto last week." },
        { word: "今週", reading: "こんしゅう", meaning: "this week", exampleJa: "今週は忙しいです。", exampleEn: "This week is busy." },
        { word: "来週", reading: "らいしゅう", meaning: "next week", exampleJa: "来週試験があります。", exampleEn: "There is an exam next week." },
        { word: "先月", reading: "せんげつ", meaning: "last month", exampleJa: "先月誕生日でした。", exampleEn: "It was my birthday last month." },
        { word: "今月", reading: "こんげつ", meaning: "this month", exampleJa: "今月は暇です。", exampleEn: "This month is free." },
        { word: "来月", reading: "らいげつ", meaning: "next month", exampleJa: "来月日本に行きます。", exampleEn: "I go to Japan next month." },
        { word: "去年", reading: "きょねん", meaning: "last year", exampleJa: "去年大学生でした。", exampleEn: "I was a university student last year." },
        { word: "今年", reading: "ことし", meaning: "this year", exampleJa: "今年卒業します。", exampleEn: "I graduate this year." },
        { word: "来年", reading: "らいねん", meaning: "next year", exampleJa: "来年結婚します。", exampleEn: "I get married next year." }
      ]
    },
    {
      id: "lesson-010",
      dayNumber: 10,
      level: "N5",
      title: "Negative Present",
      grammarPoints: [
        {
          name: "～ません (Negative Present)",
          explanation: "Polite negative present/future tense",
          examples: [
            { ja: "肉を食べません。", en: "I don't eat meat." },
            { ja: "明日学校に行きません。", en: "I won't go to school tomorrow." },
            { ja: "お酒を飲みません。", en: "I don't drink alcohol." }
          ]
        }
      ],
      vocabulary: [
        { word: "肉", reading: "にく", meaning: "meat", exampleJa: "肉を食べます。", exampleEn: "I eat meat." },
        { word: "魚", reading: "さかな", meaning: "fish", exampleJa: "魚が好きです。", exampleEn: "I like fish." },
        { word: "野菜", reading: "やさい", meaning: "vegetables", exampleJa: "野菜を食べます。", exampleEn: "I eat vegetables." },
        { word: "果物", reading: "くだもの", meaning: "fruit", exampleJa: "果物が好きです。", exampleEn: "I like fruit." },
        { word: "パン", reading: "パン", meaning: "bread", exampleJa: "朝パンを食べます。", exampleEn: "I eat bread in the morning." },
        { word: "卵", reading: "たまご", meaning: "egg", exampleJa: "卵を食べます。", exampleEn: "I eat eggs." },
        { word: "牛乳", reading: "ぎゅうにゅう", meaning: "milk", exampleJa: "牛乳を飲みます。", exampleEn: "I drink milk." },
        { word: "お茶", reading: "おちゃ", meaning: "tea", exampleJa: "お茶を飲みます。", exampleEn: "I drink tea." },
        { word: "お酒", reading: "おさけ", meaning: "alcohol", exampleJa: "お酒を飲みません。", exampleEn: "I don't drink alcohol." }
      ]
    }   ];
    export const fullPlan = lessons;