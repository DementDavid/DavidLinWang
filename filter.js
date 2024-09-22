let articles; // Declare articles in the global scope

document.addEventListener("DOMContentLoaded", function () {
  const articlesContainer = document.getElementById('articles');
  const gridViewLink = document.getElementById("grid-view-link");
  const listViewLink = document.getElementById("list-view-link");
  const dualModeContainer = document.querySelector(".dual-mode.ar");
  const recentArticlesContainer = document.querySelector('.ar');
  const categoryFilter = document.getElementById('categoryFilter');
  const maxArticlesPerPage = 9;
  let currentPage = 1;
  let startArticleIndex = 0;

  // Display articles by Category
  function displayArticles() {
    const selectedCategory = categoryFilter.value;
    const filteredArticles = articles.filter(article => selectedCategory === 'all' || article.category === selectedCategory);

    startArticleIndex = (currentPage - 1) * maxArticlesPerPage;
    const endArticleIndex = startArticleIndex + maxArticlesPerPage;

    // Refresh table
    recentArticlesContainer.innerHTML = '';

    filteredArticles.slice(startArticleIndex, endArticleIndex).forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'recent-article';

      const articleCard = document.createElement('div');
      articleCard.className = 'article-card';
      articleDiv.appendChild(articleCard);

      // Create and append the image
      const articleImage = document.createElement('img');
      articleImage.className = 'image';
      articleImage.src = article.imageURL;
      articleCard.appendChild(articleImage); // Now appending correctly after creating the anchor tag

      // Create and append the anchor tag
      const a = document.createElement('a');
      a.href = article.link;
      a.textContent = article.title;
      articleCard.appendChild(a);

      // Append the text section
      const articleText = document.createElement('div');
      articleText.className = 'article-text';
      a.appendChild(articleText); // This seems to be a mistake in the structure, should be appended to `articleCard` instead of `a`
      articleCard.appendChild(articleText);

      // Append the date
      const articleDate = document.createElement('p');
      articleDate.className = 'date';
      articleDate.textContent = article.date;
      articleCard.appendChild(articleDate);

      recentArticlesContainer.appendChild(articleDiv);

      // Grid view check
      const isGridView = dualModeContainer.classList.contains('grid-mode');
      if (!isGridView) {
        articleDiv.removeChild(articleImage);
      } else {
        const styleSheet = document.getElementById('extrastyle')?.sheet;
        // Optional: styleSheet logic commented out
      }
    });
  }

  // Function to set up pagination
  function setupPagination(totalArticles) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; 

    const totalPages = Math.ceil(totalArticles / maxArticlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;

      pageButton.addEventListener('click', function () {
        currentPage = i;
        displayArticles();
      });

      paginationContainer.appendChild(pageButton);
    }
  }

  // Event listeners
  categoryFilter.addEventListener('change', displayArticles);

  gridViewLink.addEventListener("click", function (event) {
    event.preventDefault();
    dualModeContainer.classList.add('grid-mode');
    dualModeContainer.classList.remove('list-mode');
    listViewLink.classList.remove('hightlight');
    gridViewLink.classList.add('hightlight');
    displayArticles();
  });

  listViewLink.addEventListener("click", function (event) {
    event.preventDefault();
    dualModeContainer.classList.remove('grid-mode');
    dualModeContainer.classList.add('list-mode');
    listViewLink.classList.add('hightlight');
    gridViewLink.classList.remove('hightlight');
    displayArticles();
  });

  // Fetch articles data
  fetch('php2.json')
    .then(response => response.json())
    .then(data => {
      articles = data;
      console.log(articles);
      displayArticles();
      setupPagination(articles.length); // Setup pagination once data is fetched
    })
    .catch(error => {
      console.error('Error:', error);
    });
});