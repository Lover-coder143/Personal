//
// =========================
// LOVE PROPOSAL ENGINE ❤️
// Part 1: Core + Loader + Timer
// =========================
//

// -------------------------
// LOADER CONTROL
// -------------------------
window.history.scrollRestoration = "manual";

window.onload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.pointerEvents = "none";
    }, 3000);
});

// -------------------------
// RELATIONSHIP START DATE
// -------------------------

const startDate = new Date("2024-11-25T00:00:00");

// -------------------------
// LIVE TIMER
// -------------------------

function updateTimer() {

    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours % 24;
    document.getElementById("minutes").innerText = minutes % 60;
    document.getElementById("seconds").innerText = seconds % 60;
}

setInterval(updateTimer, 1000);
updateTimer();

// -------------------------
// SMOOTH SCROLL
// -------------------------

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
//
// =========================
// LOVE PROPOSAL ENGINE ❤️
// Part 2: Interaction Layer
// =========================
//

// -------------------------
// MUSIC CONTROL 🎵
// -------------------------

const musicBtn = document.getElementById("playMusic");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {
        bgMusic.play();
        musicBtn.innerText = "⏸ Pause Our Song";
    } else {
        bgMusic.pause();
        musicBtn.innerText = "▶ Play Our Song";
    }

    isPlaying = !isPlaying;

});

// -------------------------
// GALLERY CLICK EFFECT 📸
// -------------------------

document.querySelectorAll(".photo-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});

// -------------------------
// PROPOSAL LOGIC 💍
// -------------------------

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const celebration = document.getElementById("celebration");
const proposal = document.getElementById("proposal");

// YES BUTTON 🎉

yesBtn.addEventListener("click", () => {

    proposal.style.display = "none";
    celebration.style.display = "flex";

    startCelebration();

});

// NO BUTTON (RUNS AWAY 😄)

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// -------------------------
// CELEBRATION EFFECT ❤️
// -------------------------

function startCelebration() {

    for (let i = 0; i < 50; i++) {
        createHeart();
    }

}

// -------------------------
// FLOATING HEARTS ❤️
// -------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "floatUp 4s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);

}
//
// =========================
// LOVE PROPOSAL ENGINE ❤️
// Part 3: Cinematic Effects
// =========================
//

// -------------------------
// MATRIX RAIN EFFECT 🌌
// -------------------------

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01LOVEYOU❤️FOREVER";
const lettersArray = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {

    ctx.fillStyle = "rgba(13,17,23,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffcc";
    ctx.font = fontSize + "px Fira Code";

    for (let i = 0; i < drops.length; i++) {

        const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// -------------------------
// STARS BACKGROUND ✨
// -------------------------

const starCanvas = document.getElementById("stars");
const sctx = starCanvas.getContext("2d");

starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {

    stars.push({
        x: Math.random() * starCanvas.width,
        y: Math.random() * starCanvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
    });

}

function drawStars() {

    sctx.clearRect(0, 0, starCanvas.width, starCanvas.height);

    sctx.fillStyle = "white";

    for (let i = 0; i < stars.length; i++) {

        const star = stars[i];

        sctx.beginPath();
        sctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        sctx.fill();

        star.y += star.speed;

        if (star.y > starCanvas.height) {
            star.y = 0;
        }

    }

}

setInterval(drawStars, 30);

// -------------------------
// FIREWORKS ON YES 🎆
// -------------------------

function createFirework() {

    const fire = document.createElement("div");

    fire.innerHTML = "✨";
    fire.style.position = "fixed";
    fire.style.left = Math.random() * 100 + "vw";
    fire.style.top = Math.random() * 100 + "vh";
    fire.style.fontSize = "20px";
    fire.style.animation = "explode 1s ease-out forwards";

    document.body.appendChild(fire);

    setTimeout(() => {
        fire.remove();
    }, 1000);

}

// Trigger fireworks when celebration is visible
const observer = new MutationObserver(() => {

    if (document.getElementById("celebration").style.display === "flex") {

        setInterval(createFirework, 200);

    }

});

observer.observe(document.body, { attributes: true, childList: true, subtree: true });

// -------------------------
// CONFETTI + EXTRA HEARTS 🎉
// -------------------------

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "16px";
    heart.style.animation = "floatUp 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);

}, 800);
