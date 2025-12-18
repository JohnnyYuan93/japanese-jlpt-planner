// 7-day plan for Japanese speakers learning Chinese.
// Grammar explanations in Japanese, examples in Chinese with Japanese gloss.
export const nanoLessons = [
  {
    id: 1,
    dayNumber: 1,
    level: "Intro",
    title: "声調と挨拶・自分の名前",
    grammarPoints: [
      {
        name: "四声の確認",
        explanation: "1声(¯) 高平 / 2声(ˊ) 上昇 / 3声(ˇ) 低→上昇 / 4声(ˋ) 急下降。まずは聞いて真似する。",
        examples: [
          { ja: "mā (妈)", en: "母" },
          { ja: "má (麻)", en: "麻" },
          { ja: "mǎ (马)", en: "馬" },
          { ja: "mà (骂)", en: "罵る" }
        ]
      },
      {
        name: "基本挨拶",
        explanation: "你好 / 早上好 / 晚上好 を声調を意識して発音。",
        examples: [
          { ja: "你好！", en: "こんにちは" },
          { ja: "早上好！", en: "おはようございます" }
        ]
      }
    ],
    vocabulary: [
      { word: "你好", reading: "nǐ hǎo", meaning: "こんにちは", exampleJa: "你好，我叫田中。", exampleEn: "こんにちは、田中と申します。" },
      { word: "谢谢", reading: "xièxie", meaning: "ありがとう", exampleJa: "谢谢你的帮助。", exampleEn: "助けてくれてありがとう。" },
      { word: "对不起", reading: "duìbuqǐ", meaning: "ごめんなさい", exampleJa: "对不起，我迟到了。", exampleEn: "すみません、遅れました。" },
      { word: "请", reading: "qǐng", meaning: "どうぞ / 〜してください", exampleJa: "请进。", exampleEn: "どうぞお入りください。" },
      { word: "再见", reading: "zàijiàn", meaning: "さようなら", exampleJa: "明天见，再见！", exampleEn: "また明日、さようなら！" }
    ],
    notes: "声調は必ず音声で確認して真似する。自分の名前と簡単な挨拶を録音してチェック。"
  },
  {
    id: 2,
    dayNumber: 2,
    level: "Intro",
    title: "是/不是 と A 是 B",
    grammarPoints: [
      {
        name: "A 是 B / A 不是 B",
        explanation: "“〜は…です/ではありません”。日本語の「です」に近いが活用しない。",
        examples: [
          { ja: "我是日本人。", en: "私は日本人です。" },
          { ja: "这不是咖啡。", en: "これはコーヒーではありません。" }
        ]
      }
    ],
    vocabulary: [
      { word: "是", reading: "shì", meaning: "〜である", exampleJa: "他是老师。", exampleEn: "彼は先生です。" },
      { word: "不是", reading: "bú shì", meaning: "〜ではない", exampleJa: "那不是茶。", exampleEn: "あれはお茶ではありません。" },
      { word: "老师", reading: "lǎoshī", meaning: "先生", exampleJa: "她是中文老师。", exampleEn: "彼女は中国語の先生です。" },
      { word: "学生", reading: "xuésheng", meaning: "学生", exampleJa: "我是学生。", exampleEn: "私は学生です。" },
      { word: "中国人", reading: "Zhōngguó rén", meaning: "中国人", exampleJa: "他不是中国人。", exampleEn: "彼は中国人ではありません。" }
    ],
    notes: "肯定・否定を必ずペアで練習。自分・家族・友人について3文ずつ作る。"
  },
  {
    id: 3,
    dayNumber: 3,
    level: "Intro",
    title: "疑問文：吗 と 你呢？",
    grammarPoints: [
      {
        name: "吗 (ma) 疑問",
        explanation: "平叙文の末尾に吗を付けてYes/No疑問にする。",
        examples: [
          { ja: "你是老师吗？", en: "あなたは先生ですか？" },
          { ja: "这是咖啡吗？", en: "これはコーヒーですか？" }
        ]
      },
      {
        name: "你呢 / 我呢",
        explanation: "返しの質問。“あなたは？私は？”",
        examples: [
          { ja: "我是日本人，你呢？", en: "私は日本人です。あなたは？" }
        ]
      }
    ],
    vocabulary: [
      { word: "吗", reading: "ma", meaning: "疑問助詞", exampleJa: "你喜欢中文吗？", exampleEn: "中国語は好きですか？" },
      { word: "呢", reading: "ne", meaning: "〜は？", exampleJa: "我叫李华，你呢？", exampleEn: "私は李華です。あなたは？" },
      { word: "喜欢", reading: "xǐhuan", meaning: "好き", exampleJa: "我喜欢咖啡。", exampleEn: "私はコーヒーが好きです。" },
      { word: "中国菜", reading: "Zhōngguó cài", meaning: "中国料理", exampleJa: "你喜欢中国菜吗？", exampleEn: "中国料理は好きですか？" },
      { word: "日语", reading: "Rìyǔ", meaning: "日本語", exampleJa: "他学习日语。", exampleEn: "彼は日本語を学んでいる。" }
    ],
    notes: "吗疑問と呢返しを組み合わせて対話練習3往復。"
  },
  {
    id: 4,
    dayNumber: 4,
    level: "Basic",
    title: "有 / 没有 と数量表現 (一个)",
    grammarPoints: [
      {
        name: "有 / 没有",
        explanation: "「〜がある/ない」。所有・存在どちらにも使う。",
        examples: [
          { ja: "我有一本书。", en: "私は本を一冊持っています。" },
          { ja: "我没有哥哥。", en: "私は兄がいません。" }
        ]
      },
      {
        name: "量詞 个 (ge)",
        explanation: "とりあえず万能に使える量詞。数詞＋个＋名詞。",
        examples: [
          { ja: "一个苹果", en: "リンゴ1個" },
          { ja: "两个朋友", en: "友達2人" }
        ]
      }
    ],
    vocabulary: [
      { word: "有", reading: "yǒu", meaning: "持っている/ある", exampleJa: "我有两个妹妹。", exampleEn: "私は妹が二人います。" },
      { word: "没有", reading: "méiyǒu", meaning: "ない/持っていない", exampleJa: "我没有咖啡。", exampleEn: "私はコーヒーを持っていません。" },
      { word: "个", reading: "ge", meaning: "量詞（汎用）", exampleJa: "一个学生", exampleEn: "一人の学生" },
      { word: "一本", reading: "yì běn", meaning: "一冊", exampleJa: "我有一本中文书。", exampleEn: "私は中国語の本を一冊持っています。" },
      { word: "朋友", reading: "péngyou", meaning: "友達", exampleJa: "他有很多朋友。", exampleEn: "彼は友達が多い。" }
    ],
    notes: "身の回りのものを“有/没有 + 数＋个”で5文。"
  },
  {
    id: 5,
    dayNumber: 5,
    level: "Basic",
    title: "在 + 場所 / 〜里 と 现在",
    grammarPoints: [
      {
        name: "在 + 場所",
        explanation: "「〜にいる/ある」。存在・場所の説明。",
        examples: [
          { ja: "我在家。", en: "私は家にいます。" },
          { ja: "咖啡在桌子上。", en: "コーヒーは机の上にある。" }
        ]
      },
      {
        name: "现在 + 時刻",
        explanation: "「今〜です」。時間表現の導入。",
        examples: [
          { ja: "现在七点。", en: "今は7時です。" }
        ]
      }
    ],
    vocabulary: [
      { word: "在", reading: "zài", meaning: "〜にいる/ある", exampleJa: "我在公司。", exampleEn: "私は会社にいます。" },
      { word: "家", reading: "jiā", meaning: "家", exampleJa: "他在家休息。", exampleEn: "彼は家で休んでいる。" },
      { word: "公司", reading: "gōngsī", meaning: "会社", exampleJa: "我在公司工作。", exampleEn: "私は会社で働いている。" },
      { word: "现在", reading: "xiànzài", meaning: "今", exampleJa: "现在八点半。", exampleEn: "今は8時半です。" },
      { word: "桌子", reading: "zhuōzi", meaning: "机", exampleJa: "书在桌子上。", exampleEn: "本は机の上にある。" }
    ],
    notes: "“我在____”を場所を変えて5文。“现在＋時刻”を2文作り声調確認。"
  },
  {
    id: 6,
    dayNumber: 6,
    level: "Basic",
    title: "想要 / 想吃 と 〜吧 で提案",
    grammarPoints: [
      {
        name: "想要 / 想 + 動詞",
        explanation: "「〜したい / 〜が欲しい」。想+動詞、想要+名詞。",
        examples: [
          { ja: "我想喝咖啡。", en: "私はコーヒーを飲みたい。" },
          { ja: "我想要一本词典。", en: "私は辞書が欲しい。" }
        ]
      },
      {
        name: "〜吧 (ba) 提案",
        explanation: "軽い提案・勧誘。「〜しよう」「〜しなさいよ」。",
        examples: [
          { ja: "我们去喝茶吧。", en: "お茶を飲みに行こう。" }
        ]
      }
    ],
    vocabulary: [
      { word: "想", reading: "xiǎng", meaning: "〜したい", exampleJa: "我想休息。", exampleEn: "私は休みたい。" },
      { word: "想要", reading: "xiǎng yào", meaning: "〜が欲しい", exampleJa: "我想要一杯水。", exampleEn: "水が一杯欲しい。" },
      { word: "喝", reading: "hē", meaning: "飲む", exampleJa: "他想喝咖啡。", exampleEn: "彼はコーヒーを飲みたい。" },
      { word: "吃", reading: "chī", meaning: "食べる", exampleJa: "我想吃面。", exampleEn: "私は麺が食べたい。" },
      { word: "吧", reading: "ba", meaning: "〜しよう/〜しましょう", exampleJa: "我们一起学习吧。", exampleEn: "一緒に勉強しよう。" }
    ],
    notes: "欲求表現と提案をセットで会話2往復。“我想… / …吧”を口に出す。"
  },
  {
    id: 7,
    dayNumber: 7,
    level: "Review",
    title: "一周まとめ：挨拶〜存在・欲求",
    grammarPoints: [
      {
        name: "复习 & 口頭練習",
        explanation: "挨拶、是/不是、吗疑問、呢返し、有/没有、在＋場所、想要/想＋動詞を通しで確認。",
        examples: [
          { ja: "你想喝什么？", en: "何を飲みたい？" },
          { ja: "我在家，你呢？", en: "私は家にいるよ、あなたは？" }
        ]
      }
    ],
    vocabulary: [
      { word: "练习", reading: "liànxí", meaning: "練習する", exampleJa: "多练习声调。", exampleEn: "声調をたくさん練習しよう。" },
      { word: "句子", reading: "jùzi", meaning: "文、センテンス", exampleJa: "做十个句子。", exampleEn: "10個文を作ろう。" },
      { word: "回答", reading: "huídá", meaning: "答える", exampleJa: "请回答我的问题。", exampleEn: "私の質問に答えてください。" },
      { word: "一起", reading: "yìqǐ", meaning: "一緒に", exampleJa: "我们一起练习吧。", exampleEn: "一緒に練習しよう。" },
      { word: "复习", reading: "fùxí", meaning: "復習する", exampleJa: "今天复习一到六天的内容。", exampleEn: "今日は1〜6日の内容を復習しよう。" }
    ],
    notes: "音読・録音で声調チェック。Yes/No質問→返し、所在説明、欲求+提案の流れを口で再現。"
  }
];

export const nanoPlan = nanoLessons;

