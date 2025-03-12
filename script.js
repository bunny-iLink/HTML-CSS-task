document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-section");
    const jobCards = document.querySelectorAll(".job-card");

    function showElementsSequentially(elements) {
        let index = 0;

        function showNext() {
            if (index < elements.length) {
                elements[index].classList.add("show");
                index++;
                setTimeout(showNext, 300); // Reduced delay for smoother effect
            }
        }

        showNext();
    }

    function createObserver(elements) {
        if (elements.length === 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showElementsSequentially(elements);
                    observer.disconnect(); // Stop observing after activation
                }
            });
        }, { threshold: 0.2 });

        observer.observe(elements[0]); // Observe the first element in the group
    }

    createObserver(aboutSections);
    createObserver(jobCards);
});
