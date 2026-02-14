const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let fallingInterval = null;

/* MOVE NO BUTTON */
function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
    document.getElementById("result").style.display = "block";
    music.play();
    startFalling();

    setTimeout(() => {
        goPage(2);
    }, 1500);
});

/* PAGE NAVIGATION */
function goPage(num) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById("page" + num).style.display = "flex";
}

/* FALLING IMAGES */
function startFalling() {
    if (fallingInterval) return;

    fallingInterval = setInterval(() => {
        const img = document.createElement("img");
        img.src = "images/me.jpg"; // MUST EXIST
        img.className = "fall-img";

        img.style.left = Math.random() * 100 + "vw";
        img.style.width = "50px";
        img.style.animation = "bubbleFall 5s linear forwards";

        document.body.appendChild(img);

        setTimeout(() => img.remove(), 5000);
    }, 300);
}