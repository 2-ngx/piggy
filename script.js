const steps = [
    {
        title: "Ê thằng lz.",
        description: "Bố có cái này cho m.",
        button: "Tiếp."
    },
    {
        title: "Bình tĩnh.",
        description: "Vội thế.",
        button: "Tiếp."
    },
    {
        title: "Ừ thì nay là...",
        description: "Sinh nhật mày.",
        button: "Tiếp."
    },
    {
        title: "Quà của b đây.",
        description: ":))).",
        button: "Tiếp.",
        image: "assets/images/money.jpg" 
    },
    {
        title: ":)))",
        description: "Bố mất công code đấy.",
        button: "Tiếp."
    },
    {
        title: "Đùa th, đây ms quà thật.",
        description: "...",
        button: "Tiếp.",
        image: "assets/images/selfie.jpg" 
    },
    {
        title: "Happy Birthday.",
        description: "Thôi, hết thật rồi.",
        button: "Xong.",
        music: "https://www.youtube.com/watch?v=CGfM-PN3qcs"
    }
];
const title = document.getElementById("title");
const description = document.getElementById("description");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const card = document.querySelector(".card");
const progressFill = document.getElementById("progress-fill");
const extra = document.getElementById("extra");
let currentStep = 0;
let isAnimating = false;
function render(step) {
    title.textContent = step.title;
    description.textContent = step.description;
    nextButton.textContent = step.button;
    const percent = ((currentStep + 1) / steps.length) * 100;
    progressFill.style.width = `${percent}%`;

    if (currentStep === 0) {
    backButton.style.display = "none";
    } else {
    backButton.style.display = "block";
    if (currentStep === steps.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
    let extraHTML = "";
    if (step.image) {
        extraHTML += `<img src="${step.image}" class="step-image">`;
    }
    if (step.music) {
        const videoId = step.music.split("v=")[1];
        extraHTML += `
            <div class="music-card">
                <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg">
                <a href="${step.music}" target="_blank">▶ NGHE! </a>
            </div>
        `;
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
    extra.innerHTML = extraHTML;
}
}
render(steps[currentStep]);
nextButton.addEventListener("click", () => {
    if (isAnimating) return;
    if (currentStep < steps.length - 1) {
    isAnimating = true;    
    card.classList.add("fade");
    setTimeout(() => {
        currentStep++;
        render(steps[currentStep]);
        card.classList.remove("fade"); 
        isAnimating = false;
        }, 250);
    }
});
backButton.addEventListener("click", () => {
    if (isAnimating) return;

    if (currentStep > 0) {
        isAnimating = true;
        card.classList.add("fade");

        setTimeout(() => {
            currentStep--;
            render(steps[currentStep]);
            card.classList.remove("fade");
            isAnimating = false;
        }, 250);
    }
});
