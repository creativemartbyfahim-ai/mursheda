function startExperience() {
  const bgMusic = document.getElementById("bgMusic");

  if (bgMusic) {
    bgMusic.play().catch(() => {});
  }

  const text = "আপনি আমার লাইফের সবচেয়ে annoying কিন্তু সবচেয়ে favourite মানুষ 😆💖";
  const typingEl = document.getElementById("typing");

  typingEl.innerText = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      typingEl.innerText += text[i];
      i++;
      setTimeout(type, 50);
    }
  }

  type();
}

function finalSurprise() {
  document.getElementById("finalText").innerText =
    "আমি অনেক lucky আপনাকে friend হিসেবে পেয়ে 💖🎂";

  const music = document.getElementById("bdayMusic");

  if (music) {
    music.currentTime = 0;
    music.play().catch(() => {});
  }

  if (typeof confetti === "function") {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  }
}
