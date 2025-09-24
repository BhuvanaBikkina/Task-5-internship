window.addEventListener("scroll", () => {
    document.querySelectorAll(".bar span").forEach(span => {
        const skillValue = span.getAttribute("data-skill");
        if (span.getBoundingClientRect().top < window.innerHeight) {
            span.style.width = skillValue + "%";
        }
    });
});
const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        projects.forEach(p => {
            if (category === "all" || p.getAttribute("data-category") === category) {
                p.style.display = "block";
            } else {
                p.style.display = "none";
            }
        });
    });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you, " + document.getElementById("name").value + "! I will contact you soon.");
    this.reset();
});
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
