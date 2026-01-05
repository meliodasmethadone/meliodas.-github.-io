/* THEMES */
function setTheme(theme) {
  if (theme === "green") {
    document.documentElement.style.setProperty("--main", "#7CFF00");
    document.documentElement.style.setProperty("--alt", "#b36bff");
  }
  if (theme === "red") {
    document.documentElement.style.setProperty("--main", "#ff2a2a");
    document.documentElement.style.setProperty("--alt", "#ff8a8a");
  }
  if (theme === "purple") {
    document.documentElement.style.setProperty("--main", "#b36bff");
    document.documentElement.style.setProperty("--alt", "#7CFF00");
  }
}

/* SNOW EFFECT */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w, h;
let flakes = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

class Snowflake {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.r = Math.random() * 1.5 + 0.5;
    this.vy = Math.random() * 0.8 + 0.3;
    this.vx = Math.random() * 0.4 - 0.2;
    this.alpha = Math.random() * 0.5 + 0.3;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180,0,255,${this.alpha})`;
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(124,255,0,0.6)";
    ctx.fill();
  }

  update() {
    this.y += this.vy;
    this.x += this.vx;
    if (this.y > h) {
      this.y = -5;
      this.x = Math.random() * w;
    }
  }
}

function initSnow() {
  flakes = [];
  for (let i = 0; i < 120; i++) {
    flakes.push(new Snowflake());
  }
}

function animateSnow() {
  ctx.clearRect(0, 0, w, h);
  flakes.forEach(f => {
    f.update();
    f.draw();
  });
  requestAnimationFrame(animateSnow);
}

initSnow();
animateSnow();
  
