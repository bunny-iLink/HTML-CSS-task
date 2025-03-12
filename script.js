document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-section");
    let currentSection = 0;

    function showNextSection() {
        if (currentSection < aboutSections.length) {
            aboutSections[currentSection].classList.add("show");
            currentSection++;
            setTimeout(showNextSection, 1000); // Show the next section every 1 second
        }
    }

    function checkScroll() {
        const aboutSection = document.getElementById("about-ilink");
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight / 1.2) {
            showNextSection();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
});
