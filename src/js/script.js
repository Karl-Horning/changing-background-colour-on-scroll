document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= document.getElementById("one").offsetTop) {
        document.body.style.background = document
            .getElementById("one")
            .getAttribute("data-color");
    }
    if (scrollPosition > document.getElementById("two").offsetTop) {
        document.body.style.background = document
            .getElementById("two")
            .getAttribute("data-color");
    }
    if (scrollPosition > document.getElementById("three").offsetTop) {
        document.body.style.background = document
            .getElementById("three")
            .getAttribute("data-color");
    }
    if (scrollPosition > document.getElementById("four").offsetTop) {
        document.body.style.background = document
            .getElementById("four")
            .getAttribute("data-color");
    }
    if (scrollPosition >= document.getElementById("five").offsetTop) {
        document.body.style.background = document
            .getElementById("five")
            .getAttribute("data-color");
    }
});
