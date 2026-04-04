const questions = [
  {
    id: 1,
    bg: "images/q1.jpg",
    situation: "恭喜踏入大學階段！面對前方未知的路，此時你內心的想法會是什麼？",
    options: [
      { label: "A", text: "有點害怕，想要退縮", score: 1 },
      { label: "B", text: "現在是0歲成年人，還要18年才是成年的成年人~", score: 2 },
      { label: "C", text: "有點想法，但對廣闊的未來感到迷茫", score: 3 },
      { label: "D", text: "想好未來走向，正在成為自己內心期望的樣子！", score: 4 }
    ]
  },
  {
    id: 2,
    bg: "images/q2.jpg",
    situation: "學校為大一新生舉辦的起航週！學長姐安排了各種歡迎活動。你會怎麼參與？",
    options: [
      { label: "A", text: "靜靜的當角落生物，最好別來找我說話", score: 1 },
      { label: "B", text: "身為I人的我坐等好心E人來認領", score: 2 },
      { label: "C", text: "我就是大E人！開心的玩小I人~", score: 3 },
      { label: "D", text: "利用破冰遊戲自我介紹，讓大家提前認識你！", score: 4 }
    ]
  },
  {
    id: 3,
    bg: "images/q3.jpg",
    situation: "開學初教授公布要分組報告，要自行找組員。此時的你和其他同學不怎麼認識，你會怎麼辦？",
    options: [
      { label: "A", text: "等老師分組，讓老師決定就好", score: 1 },
      { label: "B", text: "默默等待，希望有人先邀請我", score: 2 },
      { label: "C", text: "四處看看有誰是烙單的一起組隊", score: 3 },
      { label: "D", text: "什麼不認識！我直接把氣氛拉到最高~", score: 4 }
    ]
  },
  {
    id: 4,
    bg: "images/q4.jpg",
    situation: "室友們約你一起去吃飯，但你今天上課蠻累的，也不太熟。你會怎麼回應？",
    options: [
      { label: "A", text: "鳥都不鳥，找其他朋友去了", score: 1 },
      { label: "B", text: "好害怕，不認識怎麼聊天", score: 2 },
      { label: "C", text: "選擇自己吃，自在又輕鬆！", score: 3 },
      { label: "D", text: "當然去！不聊天怎麼認識！", score: 4 }
    ]
  },
  {
    id: 5,
    bg: "images/q5.jpg",
    situation: "討論報告時，你發現有一個組員完全不做事，其他人還要幫他收拾爛攤子。這時你會怎麼處理？",
    options: [
      { label: "A", text: "默默自己多做，讓他成為躺贏狗", score: 1 },
      { label: "B", text: "他負責的部分不管，做自己的就好", score: 2 },
      { label: "C", text: "做完後，只寫有做事的組員的名字，給他0分！", score: 3 },
      { label: "D", text: "嘗試與他溝通，了解他的困難", score: 4 }
    ]
  },
  {
    id: 6,
    bg: "images/q6.jpg",
    situation: "考試即將來臨，但是你沒怎麼準備，所有行程擠在一起。這時候的你會？",
    options: [
      { label: "A", text: "上課沒在聽，讀了也沒用，索性放棄", score: 1 },
      { label: "B", text: "讀書不追劇！生活沒樂趣~", score: 2 },
      { label: "C", text: "窩還能蒸！", score: 3 },
      { label: "D", text: "完全沒有這情況，系排1穩穩拿下~", score: 4 }
    ]
  },
  {
    id: 7,
    bg: "images/q7.jpg",
    situation: "這一路走來萬分艱辛，你覺得自己遇到最大的挑戰是什麼？",
    options: [
      { label: "A", text: "晚餐吃什麼？", score: 1 },
      { label: "B", text: "人際關係的處理", score: 2 },
      { label: "C", text: "時間管理", score: 3 },
      { label: "D", text: "學業壓力", score: 4 }
    ]
  },
  {
    id: 8,
    bg: "images/q8.jpg",
    situation: "一晃眼暑假將至，回顧這一年你的經歷後，請你銳評自己的大一生活。",
    options: [
      { label: "A", text: "拉完了~", score: 1 },
      { label: "B", text: "NPC", score: 2 },
      { label: "C", text: "人上人", score: 3 },
      { label: "D", text: "夯爆！", score: 4 }
    ]
  }
];

const endings = [
  {
    range: [1, 8],
    title: "獨行俠",
    icon: "🌙",
    text: "現在的你可能還沒遇到適合的朋友（或是喜歡一個人的自由感），但沒關係！有什麼心事或苦處都歡迎來找學長姐聊聊喔～"
  },
  {
    range: [9, 16],
    title: "自在旅人",
    icon: "🌿",
    text: "介於這邊的泥，是屬於自己也能開開心心的過大學生活呢！但說不定偶爾還是想要有朋友陪陪吧～"
  },
  {
    range: [17, 24],
    title: "堅韌戰士",
    icon: "⚔️",
    text: "泥可能有遇到些窘境，但好在都挺過去了～那些打不倒你的終將讓你更堅強！"
  },
  {
    range: [25, 32],
    title: "社交達人",
    icon: "✨",
    text: "恭喜泥！大一有很好的體驗呢～也希望你能保持這樣的心態，遇到不如意的事也不要輕易地被打敗！"
  }
];