// ---------- Dark Mode ----------
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  darkModeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("uselessSiteDark", isDark ? "1" : "0");
});

if (localStorage.getItem("uselessSiteDark") === "1") {
  document.body.classList.add("dark");
  darkModeBtn.textContent = "☀️ Light Mode";
}

// ---------- Section 1: Useless Button Clicker ----------
const uselessBtn = document.getElementById("uselessBtn");
const clickCountEl = document.getElementById("clickCount");
const highScoreEl = document.getElementById("highScore");

let clicks = 0;
let highScore = parseInt(localStorage.getItem("uselessSiteHighScore")) || 0;
highScoreEl.textContent = highScore;

const clickPhrases = [
  "CLICK ME 👆", "AGAIN!", "KEEP GOING 🔥", "you're addicted now",
  "why though", "one more click", "ok this is impressive", "stop. or don't.",
  "legendary clicker 👑", "touch grass?? nah click more"
];

uselessBtn.addEventListener("click", () => {
  clicks++;
  clickCountEl.textContent = clicks;
  clickCountEl.classList.remove("pop");
  void clickCountEl.offsetWidth;
  clickCountEl.classList.add("pop");

  uselessBtn.textContent = clickPhrases[Math.floor(Math.random() * clickPhrases.length)];

  if (clicks > highScore) {
    highScore = clicks;
    highScoreEl.textContent = highScore;
    localStorage.setItem("uselessSiteHighScore", highScore);
  }
});

// ---------- Section 2: Roast / Compliment Generator ----------
const roastBtn = document.getElementById("roastBtn");
const roastText = document.getElementById("roastText");

const lines = [
  "You have the energy of a fully charged phone at 3% battery. 🔋",
  "You're basically a walking plot twist. 🎬",
  "Your code compiles on the first try... occasionally. 😅",
  "You could win an award for 'Most Likely to Say Just One More Episode'. 📺",
  "You're the human version of Ctrl+Z. Reliable in a crisis.",
  "Somewhere, a semicolon is missing because of you.",
  "You debug like a detective who forgot their glasses. 🕵️",
  "10/10 would let you pick the group project topic.",
  "You have main character energy, but the plot is still loading.",
  "You're proof that chaotic and organized can coexist.",
];

roastBtn.addEventListener("click", () => {
  roastText.textContent = lines[Math.floor(Math.random() * lines.length)];
  roastText.classList.remove("pop");
  void roastText.offsetWidth;
  roastText.classList.add("pop");
});

// ---------- Section 3: Chaos Color Box ----------
const chaosBox = document.getElementById("chaosBox");

chaosBox.addEventListener("mousemove", (e) => {
  const rect = chaosBox.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / rect.width * 255);
  const y = Math.floor((e.clientY - rect.top) / rect.height * 255);
  chaosBox.style.background = `rgb(${x}, ${255 - y}, ${y})`;
  chaosBox.textContent = `x:${x} y:${y} 🌀`;
});

chaosBox.addEventListener("mouseleave", () => {
  chaosBox.style.background = "#eee";
  chaosBox.textContent = "Move your mouse here 🌈";
});

// ---------- Bonus: Easter Egg (type "srm") ----------
const eggMsg = document.getElementById("eggMsg");
let typedBuffer = "";

window.addEventListener("keydown", (e) => {
  if (e.key.length === 1) {
    typedBuffer += e.key.toLowerCase();
    if (typedBuffer.length > 10) {
      typedBuffer = typedBuffer.slice(-10);
    }
    if (typedBuffer.includes("srm")) {
      eggMsg.textContent = "🎉 Easter egg found! SRM IST KTR represent! 🎉";
      typedBuffer = "";
    }
  }
});
