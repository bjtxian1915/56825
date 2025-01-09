const canvas = document.getElementById('circleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const maxCircles = 15;
const minSpeed = 0.5;
const maxSpeed = 1.5;
let circles = [];
const colors = ['#3ff6e3', '#ff6392'];

class Circle {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    update() {
        this.y -= this.speed; // Circles move upward without following the mouse

        // Remove off-screen circles
        if (this.y + this.radius < 0) this.toRemove = true;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle) => {
        circle.update();
        circle.draw();
    });

    // Filter out circles that should be removed
    circles = circles.filter((circle) => !circle.toRemove);

    requestAnimationFrame(animate);
}

function spawnCircle() {
    const radius = Math.random() * 100 + 10;
    const x = Math.random() * canvas.width;
    const y = canvas.height + radius;
    const color = colors[Math.floor(Math.random() * colors.length)];
    let speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    speed *= radius < 20 ? 0.5 : 1; // Smaller circles move slower

    circles.push(new Circle(x, y, radius, color, speed));
}

window.addEventListener('resize', () => {
    const scaleX = window.innerWidth / canvas.width;
    const scaleY = window.innerHeight / canvas.height;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circles.forEach((circle) => {
        circle.x *= scaleX;
        circle.y *= scaleY;
    });
});

let lastSpawnTime = 0;
function spawnCirclesWithAnimation(currentTime) {
    if (currentTime - lastSpawnTime > 300 && circles.length < maxCircles) {
        spawnCircle();
        lastSpawnTime = currentTime;
    }
    requestAnimationFrame(spawnCirclesWithAnimation);
}

animate();
requestAnimationFrame(spawnCirclesWithAnimation);
