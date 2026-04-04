/* =============================
   大一人際冒險 — script.js
   ============================= */

// ── 狀態 ──────────────────────────────────────────────
let currentQ   = 0;        // 目前是第幾題（0-based）
let totalScore = 0;        // 累計總分
let answered   = false;    // 目前這題是否已作答
let selectedOpt = null;    // 目前選了哪個 button

// ── DOM 元素 ──────────────────────────────────────────
const screenStart    = document.getElementById('screen-start');
const screenQuestion = document.getElementById('screen-question');
const screenEnding   = document.getElementById('screen-ending');

const qBg          = document.getElementById('q-bg');
const qNumBadge    = document.getElementById('q-num-badge');
const qSituation   = document.getElementById('q-situation');
const qOptions     = document.getElementById('q-options');
const progressBar  = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const btnNext      = document.getElementById('btn-next');
const btnNextText  = document.getElementById('btn-next-text');

const endingIcon   = document.getElementById('ending-icon');
const endingScore  = document.getElementById('ending-score');
const endingTitle  = document.getElementById('ending-title');
const endingText   = document.getElementById('ending-text');

// ── 畫面切換 ───────────────────────────────────────────
function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ── 載入題目 ──────────────────────────────────────────
function loadQuestion(index) {
  const q = questions[index];
  answered    = false;
  selectedOpt = null;

  // 背景
  qBg.style.backgroundImage = `url('${q.bg}')`;

  // 題號 badge & 情境
  qNumBadge.textContent  = `第 ${q.id} 題`;
  qSituation.textContent = q.situation;

  // 進度條
  const pct = ((index) / questions.length) * 100;
  progressBar.style.width = pct + '%';
  progressLabel.textContent = `${index + 1} / ${questions.length}`;

  // 下一題 / 查看結果 按鈕
  btnNextText.textContent = (index === questions.length - 1) ? '查看結果' : '下一題';
  btnNext.disabled = true;

  // 重新渲染選項（觸發 CSS 重跑 animation）
  qOptions.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="opt-label">${opt.label}</span>
      <span class="opt-text">${opt.text}</span>
    `;
    btn.addEventListener('click', () => selectOption(btn, opt.score));
    qOptions.appendChild(btn);
  });
}

// ── 選擇選項 ──────────────────────────────────────────
function selectOption(clickedBtn, score) {
  // 視覺標記：清除所有選中，只標記點擊的
  document.querySelectorAll('.opt').forEach(b => b.classList.remove('selected'));
  clickedBtn.classList.add('selected');

  // 記錄這題選了哪個分數（可覆蓋）
  selectedOpt = score;
  answered = true;

  // 解鎖下一題按鈕
  btnNext.disabled = false;
}

// ── 下一題 / 查看結果 ──────────────────────────────────
function goNext() {
  // (1) 一定要作答才能繼續
  if (!answered) return;

  totalScore += selectedOpt;
  currentQ++;

  if (currentQ < questions.length) {
    // 還有題目
    loadQuestion(currentQ);
  } else {
    // 全部作完 → 顯示結語
    showEnding();
  }
}

// ── 顯示結語 ──────────────────────────────────────────
function showEnding() {
  // 更新進度條到 100%
  progressBar.style.width = '100%';

  // 找符合的結語
  const ending = endings.find(e => totalScore >= e.range[0] && totalScore <= e.range[1]);

  endingIcon.textContent  = ending.icon;
  endingScore.textContent = totalScore;
  endingTitle.textContent = ending.title;
  endingText.textContent  = ending.text;

  showScreen(screenEnding);
}

// ── 重置遊戲 ──────────────────────────────────────────
function restartGame() {
  currentQ    = 0;
  totalScore  = 0;
  answered    = false;
  selectedOpt = null;

  loadQuestion(0);
  showScreen(screenQuestion);
}

// ── 事件綁定 ──────────────────────────────────────────
const screenRegister = document.getElementById('screen-register');

document.getElementById('btn-start').addEventListener('click', () => {
  showScreen(screenRegister);
});

document.getElementById('btn-register').addEventListener('click', () => {
  const name = document.getElementById('input-name').value.trim();
  const sid  = document.getElementById('input-id').value.trim();
  const msg  = document.getElementById('submit-msg');
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSePRah1lSD3rf0-BOICPAVQpRrKZpx1BsuMFfSmZUbTe-Gcxg/formResponse';
  const ENTRY_ID   = 'entry.529924393';
  const ENTRY_NAME = 'entry.1278371576';

  if (!name || !sid) {
    msg.style.color = '#e24b4a';
    msg.textContent = '請填寫姓名和學號！';
    return;
  }

  // 送出資料到 Google 表單
  const params = new URLSearchParams();
  params.append(ENTRY_ID,   sid);
  params.append(ENTRY_NAME, name);
  fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: params });

  msg.textContent = '';
  restartGame();
  showScreen(screenQuestion);
});

btnNext.addEventListener('click', goNext);

document.getElementById('btn-restart').addEventListener('click', () => {
  restartGame();
});

// ── 初始化：預載第一題（不顯示） ─────────────────────
loadQuestion(0);