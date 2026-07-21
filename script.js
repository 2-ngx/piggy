const steps = [
    {
        title: "Ê thằng lz.",
        description: "Bố có cái này cho m.",
        button: "Bấm cái nút cc này."
    },
    {
        title: "Bình tĩnh.",
        description: "Vội thế.",
        button: "Bấm tiếp cái đb này."
    },
    {
        title: "Ừ thì nay là...",
        description: "Sinh nhật m.",
        button: "Tiếp."
    },
    {
        title: "Nên là...CMSN?",
        description: "Điểm Văn tôi như bìu nên để anh ở dưới chúc b nhé.",
        button: "Tiếp.",
        video: "rxxPqzRHsGA"
    },
    {
        title: "Còn đây là quà của b.",
        description: "Co cai dau buoi.",
        button: "Tiếp.",
        image: "assets/images/money.jpg" 
    },
    {
        title: "Đùa th, đây ms quà thật.",
        description: "...",
        button: "Quà thật ở trang sau.",
        image: "assets/images/selfie.jpg" 
    },
    {
        title: "Chả có mẹ gì ở đây hết.",
        description: ":)))",
        button: "Tiếp."
    },
    {
        title: "Tóm lại là CMSN thằng l.",
        description: "Thôi, hết rồi.",
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
    if (step.video) {
    extraHTML += `
        <div class="music-card">
            <img src="https://img.youtube.com/vi/${step.video}/hqdefault.jpg">
            <a href="https://www.youtube.com/watch?v=${step.video}" target="_blank">▶ Xem clip</a>
        </div>
    `;
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
