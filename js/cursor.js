cursor.className = 'cursor';
document.body.appendChild(cursor);

const trails = [];
const numTrails = 12; // 增加拖尾數量
const positions = Array(numTrails).fill({ x: 0, y: 0 });

// 創建更多拖尾元素
for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = (1 - i / numTrails) * 0.6; // 提高基礎透明度
    trail.style.width = `${20 - (i * 0.5)}px`; // 漸進式縮小尺寸
    trail.style.height = `${20 - (i * 0.5)}px`;
    document.body.appendChild(trail);
    trails.push(trail);
}

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

// 使用 requestAnimationFrame 實現平滑動畫
function animate() {
    // 平滑過渡到目標位置
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;

    // 更新主游標位置
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    // 更新拖尾位置
    positions.unshift({ x: currentX, y: currentY });
    positions.pop();

    trails.forEach((trail, index) => {
        const pos = positions[Math.min(index, positions.length - 1)];
        trail.style.left = `${pos.x}px`;
        trail.style.top = `${pos.y}px`;
    });

    requestAnimationFrame(animate);
}

// 監聽滑鼠移動
document.addEventListener('mousemove', (event) => {
    targetX = event.clientX + window.scrollX;
    targetY = event.clientY + window.scrollY;
});

// 開始動畫
animate();