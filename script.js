// CONFIG
const RECEIVER_NAME = "Pé Hàaa";
const PASSWORD = "180103";

// UNLOCK
function unlock() {
  const p = document.getElementById("pass").value;
  if (p === PASSWORD) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("giftCard").style.display = "block";
    document.getElementById("name").innerText = RECEIVER_NAME;
  } else {
    alert("🌑 Cánh cửa chưa sẵn sàng mở...");
  }
}

// OPEN GIFT
function openGift() {
  document.querySelector(".gift").style.display = "none";
  document.getElementById("msg").style.display = "block";
  document.getElementById("music").play();
  startFX();
}

// CONFETTI
const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let ps = [];

function startFX() {
  for (let i = 0; i < 180; i++) {
    ps.push({
      x: Math.random() * canvas.width,
      y: -20,
      r: Math.random() * 6 + 4,
      v: Math.random() * 4 + 2,
      c: `hsl(${Math.random() * 360},100%,65%)`,
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ps.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();
    p.y += p.v;
  });
  requestAnimationFrame(animate);
}

const images = [
  "images/stars.jpg",
  "images/stars1.jpg",
  "images/stars3.jpg",
  "images/stars4.jpg",
  "images/stars5.jpg",
  "images/stars6.jpg",
  "images/stars7.jpg",
  "images/stars8.jpg",
  "images/stars9.jpg",
  "images/stars10.jpg",
  "images/stars11.jpg",
  "images/stars13.jpg",
  "images/stars14.jpg",
  "images/stars15.jpg",
  "images/stars16.jpg",
  "images/stars17.jpg",
  "images/stars18.jpg",
  "images/stars19.jpg",
];

let currentIndex = 0;
const starsEl = document.querySelector(".stars");

function changeBackground() {
  currentIndex = Math.floor(Math.random() * starImages.length);
  starsEl.style.backgroundImage = `url("${starImages[currentIndex]}")`;
}

changeBackground();

setInterval(changeBackground, 6000);
