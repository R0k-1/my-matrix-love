const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Размер канваса на полный экран
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Китайские символы для эффекта матрицы
const symbols = "♥".split("");

// Размер шрифта
const fontSize = 15;
const columns = canvas.width / fontSize; // Количество колонок по ширине

// Массив для хранения позиций символов
const drops = [];

// Заполняем массив начальными значениями
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Функция рисования символов
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff3366";
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Запускаем анимацию
setInterval(draw, 35);


function showHeartAnimation() {
    const frame = heartFrames[0];
    const textElement = document.getElementById("questionText");
    textElement.style.fontSize = "20px";
    textElement.textContent = frame;
}

option1.addEventListener("click", showHeartAnimation);
option2.addEventListener("click", showHeartAnimation);


