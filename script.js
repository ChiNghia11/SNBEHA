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

// --- PHẦN THAY THẾ CHO HIỆU ỨNG HẠT BAY (EMOJI) ---
const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

// Cấu hình các loại hạt bay
const petals = ["🍀", "🌸", "🌸", "✨"];
let particles = [];

function startFX() {
  // Tăng lên 500 hạt để tạo cảm giác dày đặc
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 13 + 14, // Tăng kích thước hạt cho rõ nét
      speed: Math.random() * 10 + 2, // Tăng tốc độ rơi tối thiểu (2) và tối đa (5)
      wind: Math.random() * 10 - 1, // Tăng độ lướt ngang cho sinh động
      emoji: petals[Math.floor(Math.random() * petals.length)],
      rotation: Math.random() * 360,
      spin: Math.random() * 10 - 2, // Tăng tốc độ xoay hạt
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Thêm đổ bóng để hạt sắc nét, không bị mờ hòa vào nền
  ctx.shadowBlur = 1;
  ctx.shadowColor = "rgba(93, 87, 87, 0.5)";

  particles.forEach((p) => {
    ctx.save();
    ctx.font = `${p.size}px serif`;
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);

    // Vẽ hạt
    ctx.fillText(p.emoji, -p.size / 2, p.size / 2);
    ctx.restore();

    // Cập nhật vị trí
    p.y += p.speed;
    p.x += p.wind;
    p.rotation += p.spin;

    // Reset hạt khi rơi hết màn hình
    if (p.y > canvas.height) {
      p.y = -50; // Đưa hạt lên cao hẳn để rơi lại
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

// --- PHẦN ĐỔI ẢNH NỀN ---
const starImages = ["images/stars10.jpg"];
let currentIndex = 0;
const starsEl = document.querySelector(".stars");

function changeBackground() {
  currentIndex = Math.floor(Math.random() * starImages.length);
  starsEl.style.backgroundImage = `url("${starImages[currentIndex]}")`;
}

changeBackground();
setInterval(changeBackground, 6000);
