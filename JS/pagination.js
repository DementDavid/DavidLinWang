const articles = document.querySelectorAll(".article");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const currentPageSpan = document.getElementById("currentPage");

let currentPage = 1;
const articlesPerPage = 3; 

function showCurrentPage() {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;

    articles.forEach((article, index) => {
        if (index >= startIndex && index < endIndex) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
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
    const totalArticles = articles.length;
    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        showCurrentPage();
    }
});

showCurrentPage();