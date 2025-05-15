// snow.js

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9999';

const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5
  };
}

for (let i = 0; i < 150; i++) {
  snowflakes.push(createSnowflake());
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#FFF';
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  update();
  requestAnimationFrame(draw);
}

function update() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    if (flake.y > height) {
      flake.y = 0;
      flake.x = Math.random() * width;
    }
  }
}

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

draw();
