const gallery = document.getElementById("gallery");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const currentPageSpan = document.getElementById("currentPage");

let currentPage = 1;
const imagesPerPage = 9;

function showCurrentPage() {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const images = gallery.querySelectorAll("img");
    
    images.forEach((img, index) => {
        img.style.display = (index >= startIndex && index < endIndex) ? "block" : "none";
    });

    currentPageSpan.textContent = currentPage;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showCurrentPage();
    }
});

nextButton.addEventListener("click", () => {
    const totalImages = gallery.querySelectorAll("img").length;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        showCurrentPage();
    }
});
    currentPageSpan.textContent = currentPage;
}
