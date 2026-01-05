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
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * -h;
    this.r = Math.random() * 1.4 + 0.4;
    this.vy = Math.random() * 0.6 + 0.2;
    this.vx = Math.random() * 0.3 - 0.15;
    this.alpha = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(179,107,255,${this.alpha})`;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "rgba(154,255,0,0.5)";
    ctx.fill();
  }
  update() {
    this.y += this.vy;
    this.x += this.vx;
    if (this.y > h) this.reset();
  }
}

function init() {
  flakes = [];
  for (let i = 0; i < 140; i++) flakes.push(new Snowflake());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  flakes.forEach(f => { f.update(); f.draw(); });
  requestAnimationFrame(animate);
}

init();
animate();
