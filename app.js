const els = {
  languageSelect: document.querySelector("#languageSelect"),
  questionTotal: document.querySelector("#questionTotal"),
  topicSelect: document.querySelector("#topicSelect"),
  countSelect: document.querySelector("#countSelect"),
  startButton: document.querySelector("#startButton"),
  resetButton: document.querySelector("#resetButton"),
  availabilityNote: document.querySelector("#availabilityNote"),
  emptyState: document.querySelector("#emptyState"),
  quizState: document.querySelector("#quizState"),
  resultState: document.querySelector("#resultState"),
  reviewState: document.querySelector("#reviewState"),
  mistakesState: document.querySelector("#mistakesState"),
  favoritesState: document.querySelector("#favoritesState"),
  questionProgress: document.querySelector("#questionProgress"),
  scorePill: document.querySelector("#scorePill"),
  progressBar: document.querySelector("#progressBar"),
  questionText: document.querySelector("#questionText"),
  questionHint: document.querySelector("#questionHint"),
  answerArea: document.querySelector("#answerArea"),
  feedback: document.querySelector("#feedback"),
  checkButton: document.querySelector("#checkButton"),
  nextButton: document.querySelector("#nextButton"),
  resultScore: document.querySelector("#resultScore"),
  correctCount: document.querySelector("#correctCount"),
  wrongCount: document.querySelector("#wrongCount"),
  accuracy: document.querySelector("#accuracy"),
  reviewButton: document.querySelector("#reviewButton"),
  againButton: document.querySelector("#againButton"),
  reviewList: document.querySelector("#reviewList"),
  backToResultButton: document.querySelector("#backToResultButton"),
  wrongAnswersButton: document.querySelector("#wrongAnswersButton"),
  wrongAnswersCount: document.querySelector("#wrongAnswersCount"),
  mistakesList: document.querySelector("#mistakesList"),
  clearMistakesButton: document.querySelector("#clearMistakesButton"),
  backToSetupButton: document.querySelector("#backToSetupButton")
  ,favoriteButton: document.querySelector("#favoriteButton"),
  favoritesButton: document.querySelector("#favoritesButton"),
  favoritesCount: document.querySelector("#favoritesCount"),
  favoritesList: document.querySelector("#favoritesList"),
  clearFavoritesButton: document.querySelector("#clearFavoritesButton"),
  backFromFavoritesButton: document.querySelector("#backFromFavoritesButton")
};

const i18n = {
  en: {
    pageTitle: "Backend Quiz Lab",
    resetQuiz: "Reset quiz",
    heroEyebrow: "Backend Review Tool",
    heroIntro:
      "Practice Java, SQL, Spring Boot, Kafka, Git, and database concepts with focused quizzes and answer reviews.",
    questionsStat: "questions",
    formatsStat: "formats",
    quizSetup: "Quiz Setup",
    language: "Language",
    topic: "Topic",
    level: "Level",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    type: "Type",
    choice: "Choices",
    trueFalse: "True / False",
    short: "Short Answer",
    singleChoiceHint: "Choose one answer.",
    multipleChoiceHint: "Choose {count} answers.",
    questionCount: "Number of questions",
    startQuiz: "Start Quiz",
    ready: "Ready",
    emptyTitle: "Choose a topic and start practicing.",
    emptyBody:
      "The quiz adapts to your selected topic, level, and question type. Results include corrections and explanations.",
    checkAnswer: "Check Answer",
    wrongAnswers: "Wrong Answers",
    mistakesTitle: "Questions to review",
    mistakesIntro: "These questions are saved in this browser so you can revisit them anytime.",
    clearWrongAnswers: "Clear Wrong Answers",
    backToSetup: "Back",
    noWrongAnswers: "No wrong answers saved yet.",
    favorites: "Starred Questions",
    favoritesTitle: "Questions you saved",
    favoritesIntro: "Star questions you want to revisit later.",
    clearFavorites: "Clear Starred Questions",
    starQuestion: "Star question",
    removeFavorite: "Remove star",
    noFavorites: "No starred questions saved yet.",
    optionDetails: "Option details:",
    next: "Next",
    finishQuiz: "Finish Quiz",
    quizComplete: "Quiz Complete",
    correct: "Correct",
    needsReview: "Needs Review",
    accuracy: "Accuracy",
    reviewAnswers: "Review Answers",
    takeAnother: "Take Another Quiz",
    review: "Review",
    answersAndExplanations: "Answers and explanations",
    result: "Result",
    questionProgress: "Question {current} / {total}",
    scorePill: "{count} correct",
    availabilityEnough: "{available} matching {type} questions are available.",
    availabilityFallback:
      "{available} exact {type} question(s) found. The quiz will fill up to {fillable} with nearby review questions.",
    typeAnswerFirst: "Please type an answer before checking.",
    correctFeedback: "Correct.",
    wrongFeedback: "Not quite.",
    correctAnswer: "Correct answer:",
    shortPlaceholder: "Type your answer here",
    true: "True",
    false: "False",
    yourAnswer: "Your answer:",
    explanation: "Explanation:",
    blank: "(blank)",
    selectAtLeastOneType: "Select at least one question type."
  },
  ko: {
    pageTitle: "백엔드 퀴즈 랩",
    resetQuiz: "퀴즈 초기화",
    heroEyebrow: "백엔드 복습 도구",
    heroIntro:
      "Java, SQL, Spring Boot, Kafka, Git, 데이터베이스 개념을 집중 퀴즈와 답안 리뷰로 연습해 보세요.",
    questionsStat: "문항",
    formatsStat: "유형",
    quizSetup: "퀴즈 설정",
    language: "언어",
    topic: "주제",
    level: "난이도",
    easy: "쉬움",
    medium: "보통",
    hard: "어려움",
    type: "문제 유형",
    choice: "선택형",
    trueFalse: "참 / 거짓",
    short: "단답형",
    singleChoiceHint: "정답 하나를 선택하세요.",
    multipleChoiceHint: "정답 {count}개를 선택하세요.",
    questionCount: "문항 수",
    startQuiz: "퀴즈 시작",
    ready: "준비 완료",
    emptyTitle: "주제를 선택하고 연습을 시작하세요.",
    emptyBody:
      "선택한 주제, 난이도, 문제 유형에 맞춰 퀴즈가 구성됩니다. 결과에서 정답과 해설을 확인할 수 있습니다.",
    checkAnswer: "정답 확인",
    wrongAnswers: "오답 모음",
    mistakesTitle: "복습할 문제",
    mistakesIntro: "이 문제들은 이 브라우저에 저장되므로 언제든 다시 볼 수 있습니다.",
    clearWrongAnswers: "오답 비우기",
    backToSetup: "돌아가기",
    noWrongAnswers: "아직 저장된 오답이 없습니다.",
    favorites: "별표한 문제",
    favoritesTitle: "저장한 문제",
    favoritesIntro: "나중에 다시 보고 싶은 문제에 별표를 표시하세요.",
    clearFavorites: "별표한 문제 비우기",
    starQuestion: "문제에 별표하기",
    removeFavorite: "별표 제거",
    noFavorites: "아직 별표한 문제가 없습니다.",
    optionDetails: "선택지 설명:",
    next: "다음",
    finishQuiz: "퀴즈 끝내기",
    quizComplete: "퀴즈 완료",
    correct: "정답",
    needsReview: "복습 필요",
    accuracy: "정답률",
    reviewAnswers: "답안 리뷰",
    takeAnother: "다른 퀴즈 풀기",
    review: "리뷰",
    answersAndExplanations: "답안과 해설",
    result: "결과",
    questionProgress: "{current} / {total}번 문제",
    scorePill: "{count}개 정답",
    availabilityEnough: "{type} 문항이 {available}개 있습니다.",
    availabilityFallback:
      "정확히 일치하는 {type} 문항은 {available}개입니다. 비슷한 복습 문항을 포함해 최대 {fillable}개로 구성합니다.",
    typeAnswerFirst: "확인하기 전에 답을 입력해 주세요.",
    correctFeedback: "정답입니다.",
    wrongFeedback: "아쉬워요.",
    correctAnswer: "정답:",
    shortPlaceholder: "답을 입력하세요",
    true: "참",
    false: "거짓",
    yourAnswer: "내 답:",
    explanation: "해설:",
    blank: "(빈 답안)",
    selectAtLeastOneType: "문제 유형을 하나 이상 선택해 주세요."
  },
  zh: {
    pageTitle: "後端練習 Quiz Lab",
    resetQuiz: "重設測驗",
    heroEyebrow: "後端複習工具",
    heroIntro:
      "透過聚焦測驗與答案檢討，練習 Java、SQL、Spring Boot、Kafka、Git 與資料庫概念。",
    questionsStat: "題目",
    formatsStat: "題型",
    quizSetup: "測驗設定",
    language: "語言",
    topic: "主題",
    level: "難度",
    easy: "簡單",
    medium: "中等",
    hard: "困難",
    type: "題型",
    choice: "選擇題",
    trueFalse: "是非題",
    short: "簡答題",
    singleChoiceHint: "請選擇一個答案。",
    multipleChoiceHint: "請選擇 {count} 個答案。",
    questionCount: "題數",
    startQuiz: "開始測驗",
    ready: "準備好了",
    emptyTitle: "選擇主題後開始練習。",
    emptyBody:
      "測驗會依照你選擇的主題、難度與題型出題。結果頁會包含訂正與解釋。",
    checkAnswer: "檢查答案",
    wrongAnswers: "錯題整理",
    mistakesTitle: "待複習題目",
    mistakesIntro: "這些題目會儲存在此瀏覽器中，方便你隨時回來複習。",
    clearWrongAnswers: "清除錯題",
    backToSetup: "返回",
    noWrongAnswers: "目前沒有儲存的錯題。",
    favorites: "已加星號題目",
    favoritesTitle: "你儲存的題目",
    favoritesIntro: "為想稍後複習的題目加上星號。",
    clearFavorites: "清除已加星號題目",
    starQuestion: "為題目加星號",
    removeFavorite: "移除星號",
    noFavorites: "目前沒有已加星號的題目。",
    optionDetails: "選項說明：",
    next: "下一題",
    finishQuiz: "完成測驗",
    quizComplete: "測驗完成",
    correct: "答對",
    needsReview: "需複習",
    accuracy: "正確率",
    reviewAnswers: "檢討答案",
    takeAnother: "再做一次",
    review: "檢討",
    answersAndExplanations: "答案與解釋",
    result: "結果",
    questionProgress: "第 {current} / {total} 題",
    scorePill: "答對 {count} 題",
    availabilityEnough: "有 {available} 題符合的{type}。",
    availabilityFallback:
      "完全符合的{type}有 {available} 題。測驗會補入相近的複習題，最多 {fillable} 題。",
    typeAnswerFirst: "請先輸入答案再檢查。",
    correctFeedback: "答對了。",
    wrongFeedback: "還差一點。",
    correctAnswer: "正確答案：",
    shortPlaceholder: "請輸入你的答案",
    true: "是",
    false: "否",
    yourAnswer: "你的答案：",
    explanation: "解釋：",
    blank: "（空白）",
    selectAtLeastOneType: "請至少選擇一種題型。"
  }
};

const state = {
  questions: [],
  currentIndex: 0,
  answers: [],
  checked: false,
  wrongAnswers: JSON.parse(localStorage.getItem("quizWrongAnswers") || "[]"),
  favorites: JSON.parse(localStorage.getItem("quizFavorites") || "[]"),
  language: localStorage.getItem("quizLanguage") || "en"
};

const questionTranslations = {
  "Which keyword is used to create a class in Java?": {
    ko: "Java에서 클래스를 선언할 때 사용하는 키워드는 무엇인가요?",
    zh: "在 Java 中，哪個關鍵字用來宣告類別？"
  },
  "Which Java type is commonly used for true or false values?": {
    ko: "Java에서 참 또는 거짓 값을 나타내는 타입은 무엇인가요?",
    zh: "Java 中通常使用哪種型別表示真或假？"
  },
  "Java source files usually use the `.java` extension.": {
    ko: "Java 소스 파일은 보통 `.java` 확장자를 사용합니다.",
    zh: "Java 原始檔通常使用 `.java` 副檔名。"
  },
  "What method name is the usual entry point of a Java application?": {
    ko: "Java 애플리케이션의 일반적인 시작 메서드 이름은 무엇인가요?",
    zh: "Java 應用程式通常以哪個方法名稱作為進入點？"
  },
  "Which statement about Java interfaces is correct?": {
    ko: "Java 인터페이스에 대한 설명으로 올바른 것은 무엇인가요?",
    zh: "關於 Java 介面的說法，哪一項正確？"
  },
  "Which collection does not allow duplicate elements?": {
    ko: "중복 요소를 허용하지 않는 컬렉션은 무엇인가요?",
    zh: "哪一種集合不允許重複元素？"
  },
  "HashMap guarantees insertion order.": {
    ko: "HashMap은 삽입 순서를 보장합니다.",
    zh: "HashMap 會保證插入順序。"
  },
  "What Java feature lets one method name have different parameter lists?": {
    ko: "하나의 메서드 이름으로 서로 다른 매개변수 목록을 사용할 수 있게 하는 Java 기능은 무엇인가요?",
    zh: "哪個 Java 特性讓同一個方法名稱可以擁有不同的參數列表？"
  },
  "Which statement about `equals` and `hashCode` is correct?": {
    ko: "`equals`와 `hashCode`에 대한 설명으로 올바른 것은 무엇인가요?",
    zh: "關於 `equals` 與 `hashCode`，哪個說法正確？"
  },
  "A checked exception must be caught or declared by the method signature.": {
    ko: "검사 예외는 반드시 잡거나 메서드 시그니처에 선언해야 합니다.",
    zh: "受檢例外必須被捕捉，或在方法簽名中宣告。"
  },
  "Which keyword marks a variable as not serialized by Java serialization?": {
    ko: "Java 직렬화에서 변수를 직렬화하지 않도록 표시하는 키워드는 무엇인가요?",
    zh: "在 Java 序列化中，哪個關鍵字會標記變數不被序列化？"
  }
};

function localizedQuestion(question) {
  const translated = questionTranslations[question.question]?.[state.language];
  return translated ? { ...question, question: translated } : question;
}

function t(key, values = {}) {
  const template = i18n[state.language][key] || i18n.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function normalize(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getSelectedRadio(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function getSelectedTypes() {
  return [...document.querySelectorAll('input[name="type"]:checked')].map((input) => input.value);
}

function setView(viewName) {
  for (const key of ["emptyState", "quizState", "resultState", "reviewState", "mistakesState", "favoritesState"]) {
    els[key].classList.toggle("hidden", key !== viewName);
  }
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  els.resetButton.title = t("resetQuiz");
  els.resetButton.setAttribute("aria-label", t("resetQuiz"));
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  updateAvailability();
  updateWrongAnswersButton();
  updateFavoritesButton();

  if (!els.quizState.classList.contains("hidden") && state.questions.length) {
    renderQuestion();
  }

  if (!els.resultState.classList.contains("hidden") && state.answers.length) {
    renderResult();
  }

  if (!els.reviewState.classList.contains("hidden") && state.answers.length) {
    renderReview();
  }

  if (!els.mistakesState.classList.contains("hidden")) {
    renderWrongAnswers();
  }

  if (!els.favoritesState.classList.contains("hidden")) {
    renderFavorites();
  }
}

function questionKey(question) {
  return `${question.topic}|${question.level}|${question.type}|${question.question}`;
}

function updateWrongAnswersButton() {
  els.wrongAnswersButton.querySelector("[data-i18n]").textContent = t("wrongAnswers");
  els.wrongAnswersCount.textContent = state.wrongAnswers.length;
}

function updateFavoritesButton() {
  els.favoritesButton.querySelector("[data-i18n]").textContent = t("favorites");
  els.favoritesCount.textContent = state.favorites.length;
}

function isFavorite(question) {
  return state.favorites.some((item) => item.key === questionKey(question));
}

function updateFavoriteButton(question) {
  const active = isFavorite(question);
  els.favoriteButton.textContent = active ? "★" : "☆";
  els.favoriteButton.classList.toggle("active", active);
  els.favoriteButton.title = active ? t("removeFavorite") : t("starQuestion");
  els.favoriteButton.setAttribute("aria-label", els.favoriteButton.title);
}

function toggleFavorite() {
  const question = state.questions[state.currentIndex];
  if (!question) return;
  const key = questionKey(question);
  const index = state.favorites.findIndex((item) => item.key === key);
  if (index >= 0) state.favorites.splice(index, 1);
  else state.favorites.push({ key, question });
  localStorage.setItem("quizFavorites", JSON.stringify(state.favorites));
  updateFavoriteButton(question);
  updateFavoritesButton();
}

function saveWrongAnswer(question, userAnswer) {
  const key = questionKey(question);
  const existing = state.wrongAnswers.find((item) => item.key === key);
  if (existing) {
    existing.userAnswer = userAnswer;
  } else {
    state.wrongAnswers.push({ key, question, userAnswer });
  }
  localStorage.setItem("quizWrongAnswers", JSON.stringify(state.wrongAnswers));
  updateWrongAnswersButton();
}

function populateTopics() {
  const topics = [...new Set(window.QUESTION_BANK.map((item) => item.topic))].sort((a, b) => {
    if (a === "Java") return -1;
    if (b === "Java") return 1;
    return a.localeCompare(b);
  });
  els.topicSelect.innerHTML = topics
    .map((topic) => `<option value="${topic}">${topic}</option>`)
    .join("");
  els.questionTotal.textContent = window.QUESTION_BANK.length;
}

function matchingQuestions() {
  const topic = els.topicSelect.value;
  const level = getSelectedRadio("level");
  const types = getSelectedTypes();
  return window.QUESTION_BANK.filter(
    (item) => item.topic === topic && item.level === level && types.includes(item.type)
  );
}

function buildQuizQuestions() {
  const topic = els.topicSelect.value;
  const level = getSelectedRadio("level");
  const types = getSelectedTypes();
  const requested = Number(els.countSelect.value);
  if (!types.length) return [];
  const exactType = (item) => types.includes(item.type);
  const buckets = [
    (item) => item.topic === topic && item.level === level && exactType(item),
    (item) => item.topic === topic && exactType(item),
    (item) => item.level === level && exactType(item),
    exactType
  ];
  const picked = [];
  const seen = new Set();

  for (const bucket of buckets) {
    for (const question of shuffle(window.QUESTION_BANK.filter(bucket))) {
      const key = `${question.topic}|${question.level}|${question.type}|${question.question}`;
      if (!seen.has(key)) {
        picked.push(question);
        seen.add(key);
      }
      if (picked.length === requested) return picked;
    }
  }

  return picked;
}

function updateAvailability() {
  const available = matchingQuestions().length;
  const requested = Number(els.countSelect.value);
  const types = getSelectedTypes();
  const typeLabel = types.map((type) => t(type)).join(", ");
  const fillable = Math.min(requested, buildQuizQuestions().length);

  if (!types.length) {
    els.availabilityNote.textContent = t("selectAtLeastOneType");
    els.startButton.disabled = true;
    return;
  }

  els.availabilityNote.textContent =
    available >= requested
      ? t("availabilityEnough", { available, type: typeLabel })
      : t("availabilityFallback", { available, type: typeLabel, fillable });
  els.startButton.disabled = fillable === 0;
}

function startQuiz() {
  state.questions = buildQuizQuestions();
  state.currentIndex = 0;
  state.answers = [];
  state.checked = false;

  if (!state.questions.length) {
    updateAvailability();
    return;
  }

  setView("quizState");
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const displayQuestion = localizedQuestion(question);
  const number = state.currentIndex + 1;
  const total = state.questions.length;

  els.questionProgress.textContent = t("questionProgress", { current: number, total });
  els.scorePill.textContent = t("scorePill", {
    count: state.answers.filter((item) => item.correct).length
  });
  els.progressBar.style.width = `${((number - 1) / total) * 100}%`;
  els.questionText.textContent = displayQuestion.question;
  updateFavoriteButton(question);
  const answerCount = Array.isArray(question.answer) ? question.answer.length : 1;
  const hint = question.type === "choice"
    ? answerCount > 1
      ? t("multipleChoiceHint", { count: answerCount })
      : t("singleChoiceHint")
    : "";
  els.questionHint.textContent = hint;
  els.feedback.className = "feedback hidden";
  els.feedback.textContent = "";
  els.checkButton.classList.remove("hidden");
  els.nextButton.classList.add("hidden");
  els.checkButton.disabled = false;
  state.checked = false;

  if (question.type === "choice") {
    const multiple = Array.isArray(question.answer) && question.answer.length > 1;
    els.answerArea.innerHTML = question.options
      .map(
        (option, index) => `
          <label class="choice-option">
            <input type="${multiple ? "checkbox" : "radio"}" name="answer" value="${escapeHtml(option)}" />
            <span>${escapeHtml(option)}</span>
          </label>
        `
      )
      .join("");
    return;
  }

  if (question.type === "trueFalse") {
    els.answerArea.innerHTML = [
      ["True", t("true")],
      ["False", t("false")]
    ]
      .map(
        ([value, label], index) => `
          <label class="tf-option">
            <input type="radio" name="answer" value="${value}" ${index === 0 ? "checked" : ""} />
            <span>${label}</span>
          </label>
        `
      )
      .join("");
    return;
  }

  els.answerArea.innerHTML = `
    <textarea id="shortAnswer" placeholder="${escapeHtml(t("shortPlaceholder"))}"></textarea>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getUserAnswer() {
  const question = state.questions[state.currentIndex];
  if (question.type === "short") {
    return document.querySelector("#shortAnswer").value;
  }

  const selected = [...document.querySelectorAll('input[name="answer"]:checked')].map((input) => input.value);
  return Array.isArray(question.answer) ? selected : selected[0] || "";
}

function isCorrectAnswer(question, userAnswer) {
  if (question.type === "short") {
    const accepted = Array.isArray(question.answer) ? question.answer : [question.answer];
    return accepted.some((answer) => normalize(answer) === normalize(userAnswer));
  }

  if (Array.isArray(question.answer)) {
    const expected = question.answer.map(normalize).sort();
    const actual = (Array.isArray(userAnswer) ? userAnswer : [userAnswer]).map(normalize).sort();
    return expected.length === actual.length && expected.every((answer, index) => answer === actual[index]);
  }

  return normalize(question.answer) === normalize(userAnswer);
}

function optionExplanationHtml(question) {
  if (!question.optionExplanations) return "";
  const details = Object.entries(question.optionExplanations)
    .map(([option, explanation]) => `<li><strong>${escapeHtml(option)}:</strong> ${escapeHtml(explanation)}</li>`)
    .join("");
  return `<br><strong>${escapeHtml(t("optionDetails"))}</strong><ul>${details}</ul>`;
}

function checkAnswer() {
  if (state.checked) return;

  const question = state.questions[state.currentIndex];
  const userAnswer = getUserAnswer();

  if (question.type === "short" && !normalize(userAnswer)) {
    els.feedback.className = "feedback wrong";
    els.feedback.textContent = t("typeAnswerFirst");
    return;
  }

  const correct = isCorrectAnswer(question, userAnswer);
  state.answers.push({
    question,
    userAnswer,
    correct
  });
  if (!correct) saveWrongAnswer(question, userAnswer);
  state.checked = true;

  els.feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
  const correctAnswer = Array.isArray(question.answer) ? question.answer.join(", ") : question.answer;
  els.feedback.innerHTML = correct
    ? `<strong>${escapeHtml(t("correctFeedback"))}</strong> ${escapeHtml(question.explanation)}${optionExplanationHtml(question)}`
    : `<strong>${escapeHtml(t("wrongFeedback"))}</strong> ${escapeHtml(t("correctAnswer"))} <strong>${escapeHtml(
        correctAnswer
      )}</strong><br>${escapeHtml(question.explanation)}${optionExplanationHtml(question)}`;

  els.progressBar.style.width = `${((state.currentIndex + 1) / state.questions.length) * 100}%`;
  els.scorePill.textContent = t("scorePill", {
    count: state.answers.filter((item) => item.correct).length
  });
  els.checkButton.classList.add("hidden");
  els.nextButton.classList.remove("hidden");
  els.nextButton.textContent =
    state.currentIndex === state.questions.length - 1 ? t("finishQuiz") : t("next");
}

function nextQuestion() {
  if (state.currentIndex === state.questions.length - 1) {
    renderResult();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function renderResult() {
  const correct = state.answers.filter((item) => item.correct).length;
  const total = state.questions.length;
  const percent = Math.round((correct / total) * 100);

  els.resultScore.textContent = `${correct} / ${total}`;
  els.correctCount.textContent = correct;
  els.wrongCount.textContent = total - correct;
  els.accuracy.textContent = `${percent}%`;
  setView("resultState");
}

function renderReview() {
  els.reviewList.innerHTML = state.answers
    .map((item, index) => {
      const displayQuestion = localizedQuestion(item.question);
      const answer = Array.isArray(item.question.answer) ? item.question.answer.join(", ") : item.question.answer;
      return `
        <article class="review-item ${item.correct ? "correct" : "wrong"}">
          <h3>${index + 1}. ${escapeHtml(displayQuestion.question)}</h3>
          <p><strong>${escapeHtml(t("yourAnswer"))}</strong> ${escapeHtml(item.userAnswer || t("blank"))}</p>
          <p><strong>${escapeHtml(t("correctAnswer"))}</strong> ${escapeHtml(answer)}</p>
          <p><strong>${escapeHtml(t("explanation"))}</strong> ${escapeHtml(item.question.explanation)}</p>
        </article>
      `;
    })
    .join("");
  setView("reviewState");
}

function renderWrongAnswers() {
  if (!state.wrongAnswers.length) {
    els.mistakesList.innerHTML = `<p class="mistakes-intro">${escapeHtml(t("noWrongAnswers"))}</p>`;
  } else {
    els.mistakesList.innerHTML = state.wrongAnswers
      .map((item, index) => {
        const question = localizedQuestion(item.question);
        const answer = Array.isArray(question.answer) ? question.answer.join(", ") : question.answer;
        return `<article class="review-item wrong"><h3>${index + 1}. ${escapeHtml(question.question)}</h3><p><strong>${escapeHtml(t("yourAnswer"))}</strong> ${escapeHtml(Array.isArray(item.userAnswer) ? item.userAnswer.join(", ") : item.userAnswer || t("blank"))}</p><p><strong>${escapeHtml(t("correctAnswer"))}</strong> ${escapeHtml(answer)}</p><p><strong>${escapeHtml(t("explanation"))}</strong> ${escapeHtml(question.explanation)}</p></article>`;
      })
      .join("");
  }
  setView("mistakesState");
}

function clearWrongAnswers() {
  state.wrongAnswers = [];
  localStorage.removeItem("quizWrongAnswers");
  updateWrongAnswersButton();
  renderWrongAnswers();
}

function renderFavorites() {
  if (!state.favorites.length) {
    els.favoritesList.innerHTML = `<p class="mistakes-intro">${escapeHtml(t("noFavorites"))}</p>`;
  } else {
    els.favoritesList.innerHTML = state.favorites
      .map((item, index) => {
        const question = localizedQuestion(item.question);
        const answer = Array.isArray(question.answer) ? question.answer.join(", ") : question.answer;
        return `<article class="review-item"><h3>${index + 1}. ${escapeHtml(question.question)}</h3><p><strong>${escapeHtml(t("correctAnswer"))}</strong> ${escapeHtml(answer)}</p><p><strong>${escapeHtml(t("explanation"))}</strong> ${escapeHtml(question.explanation)}</p></article>`;
      })
      .join("");
  }
  setView("favoritesState");
}

function clearFavorites() {
  state.favorites = [];
  localStorage.removeItem("quizFavorites");
  updateFavoritesButton();
  renderFavorites();
}

function resetQuiz() {
  state.questions = [];
  state.currentIndex = 0;
  state.answers = [];
  state.checked = false;
  setView("emptyState");
  updateAvailability();
}

els.languageSelect.value = i18n[state.language] ? state.language : "en";
state.language = els.languageSelect.value;
populateTopics();
applyTranslations();

els.languageSelect.addEventListener("change", () => {
  state.language = els.languageSelect.value;
  localStorage.setItem("quizLanguage", state.language);
  applyTranslations();
});
els.startButton.addEventListener("click", startQuiz);
els.resetButton.addEventListener("click", resetQuiz);
els.checkButton.addEventListener("click", checkAnswer);
els.nextButton.addEventListener("click", nextQuestion);
els.reviewButton.addEventListener("click", renderReview);
els.againButton.addEventListener("click", resetQuiz);
els.backToResultButton.addEventListener("click", () => setView("resultState"));
els.wrongAnswersButton.addEventListener("click", renderWrongAnswers);
els.clearMistakesButton.addEventListener("click", clearWrongAnswers);
els.backToSetupButton.addEventListener("click", () => setView("emptyState"));
els.favoriteButton.addEventListener("click", toggleFavorite);
els.favoritesButton.addEventListener("click", renderFavorites);
els.clearFavoritesButton.addEventListener("click", clearFavorites);
els.backFromFavoritesButton.addEventListener("click", () => setView("emptyState"));
els.topicSelect.addEventListener("change", updateAvailability);
els.countSelect.addEventListener("change", updateAvailability);
document.querySelectorAll('input[name="level"], input[name="type"]').forEach((input) => {
  input.addEventListener("change", updateAvailability);
});
