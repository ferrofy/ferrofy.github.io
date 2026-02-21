// --- 1. Typewriter Effect ---
const phrases = [
    "Coder",
    "IoT Architect",
    "Cyber Security Analyst",
    "Blockchain Developer",
    "Startup Enthusiast"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    document.getElementById('typewriter').innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            document.getElementById('typewriter').innerHTML = currentPhrase.join('');
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            document.getElementById('typewriter').innerHTML = currentPhrase.join('');
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(loop, time);
}

// Start Typewriter
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(loop, 1000); // Initial delay
});

// --- 2. Scroll Reveal Animations ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var k = 0; k < reveals.length; k++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[k].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[k].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// --- 3. Animate Skill Bars on Scroll ---
const skillSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.skill-per');
let animated = false;

window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if(sectionPos < screenPos && !animated) {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
            
            // Show tooltip after bar fills
            setTimeout(() => {
                bar.querySelector('.tooltip').style.opacity = '1';
            }, 1000);
        });
        animated = true;
    }
});