const RECEIVER_NAME = "Pé Hàaa";
const PASSWORD = "180103";

function unlock() {
  const p = document.getElementById("pass").value;
  if (p === PASSWORD) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("giftCard").style.display = "block";
    document.getElementById("name").innerText = RECEIVER_NAME;
  } else {
    alert("🌑Sai ùi cucdang ơi, Nhạp lại nhoaaa :)))");
  }
}

function openGift() {
  const giftCard = document.getElementById("giftCard");
  giftCard.classList.add("fade-out");

  const msg = document.getElementById("msg");
  msg.style.display = "block";

  const stanzas = document.querySelectorAll(".stanza");
  setTimeout(() => {
    stanzas.forEach((s) => {
      s.classList.add("show");
    });
  }, 500);

  document.querySelector(".stars").style.opacity = "1";
  document.getElementById("music").play();
  startFX();
}

const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const petals = ["🍀", "🌸", "🌸", "✨", "✨"];
let particles = [];

function startFX() {
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 13 + 14,
      speed: Math.random() * 10 + 2,
      wind: Math.random() * 10 - 1,
      emoji: petals[Math.floor(Math.random() * petals.length)],
      rotation: Math.random() * 360,
      spin: Math.random() * 15 - 2,
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 1;
  ctx.shadowColor = "rgba(93, 87, 87, 0.5)";

  particles.forEach((p) => {
    ctx.save();
    ctx.font = `${p.size}px serif`;
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);

    ctx.fillText(p.emoji, -p.size / 2, p.size / 2);
    ctx.restore();

    p.y += p.speed;
    p.x += p.wind;
    p.rotation += p.spin;

    if (p.y > canvas.height) {
      p.y = -50;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

const starImages = ["images/stars10.jpg"];
let currentIndex = 0;
const starsEl = document.querySelector(".stars");

function changeBackground() {
  currentIndex = Math.floor(Math.random() * starImages.length);
  starsEl.style.backgroundImage = `url("${starImages[currentIndex]}")`;
}

changeBackground();
setInterval(changeBackground, 6000);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function startFX() {
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 10 + 12,
      speed: Math.random() * 3 + 2,
      wind: Math.random() * 2 - 1,
      emoji: petals[Math.floor(Math.random() * petals.length)],
      rotation: Math.random() * 360,
      spin: Math.random() * 3 - 1.5,
    });
  }
  animate();
}
