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
	  articleDiv.appendChild(articleCard)
	  

      const articleImage = document.createElement('img')
      articleImage.className = 'image';
      articleImage.src = article.imageURL;
      a.appendChild(articleImage);

      const a = document.createElement('a');
      a.href = article.link;
      a.textContent = article.title;
      articleCard.appendChild(a);


      const articleText = document.createElement('div');
      articleText.className = 'article-text';
      a.appendChild(articleText);

      const articleDate = document.createElement('p');
      articleDate.className = 'date';
      articleDate.textContent = article.date;
      a.appendChild(articleDate);

      recentArticlesContainer.appendChild(articleDiv);

      // Verificator
      const isGridView = dualModeContainer.classList.contains('grid-mode');
      if (!isGridView) {
        articleDiv.removeChild(articleImage);
      }
      else{
	const styleSheet = document.getElementById('extrastyle').sheet;
        /*styleSheet.insertRule('.recent-article { height: 24vw; }', styleSheet.cssRules.length);*/
      }
    });
  }

  // Hearer of events
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
    })
    .catch(error => {
      console.error('Error :', error);
    });
});
