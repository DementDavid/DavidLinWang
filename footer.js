
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");

    function toggleFooterVisibility() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const contentHeight = document.querySelector(".content").getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight >= contentHeight) {
            document.body.classList.add("show-footer");
        } else {
            document.body.classList.remove("show-footer");
        }
    }
    window.addEventListener("scroll", toggleFooterVisibility);
    toggleFooterVisibility();
    window.addEventListener("resize", toggleFooterVisibility);
});