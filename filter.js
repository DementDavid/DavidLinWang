        //Article's table
        /*const articles = [
		{
        title: "&#127875;&#127875; Happy Halloween 2023",
        link: "https://dementdavid.github.io/DavidLinWang.github.io/Posts/HappyHalloween2023.html",
        date: "31-10-2023",
        description: "slfsflsfjs",
	category:"Post"
    },
		{
        title: "Update 1.1",
        link: "https://dementdavid.github.io/DavidLinWang.github.io/Posts/Update1_1.html",
        date: "25-10-2023",
        description: "slfsflsfjs",
	category:"Updates"
    },
    	{
        title: "Autumn is here",
        link: "https://dementdavid.github.io/DavidLinWang.github.io/Posts/Autumn is here.html",
        date: "17-10-2023",
        description: "slfsflsfjs",
	category:"Artwork"
    },
	     {
        title: "Quasar",
        link: "https://dementdavid.github.io/DavidLinWang.github.io/Posts/Quasar.html",
        date: "11-10-2023",
        description: "slfsflsfjs",
	category:"Artwork"
    },
    {
        title: "Release 1.0 patch notes",
        link: "https://dementdavid.github.io/DavidLinWang.github.io/Release1_0.html",
        date: "27-09-2023",
        description: "slfsflsfjs",
	category:"Updates"
    },
    {
        title: "Website is now live",
        link: "https://dementdavid.github.io/DavidLinWang.github.io/Website%20is%20now%20live.html",
        date: "24-09-2023",
        description: "slfsflsfjs",
	category:"Post"
    },
        ];
	*/
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

      const a = document.createElement('a');
      a.href = article.link;
      a.textContent = article.title;
      articleDiv.appendChild(a);

      const articleImage = document.createElement('img')
      articleImage.src = article.imageURL;
      articleDiv.appendChild(articleImage);

      const articleDate = document.createElement('p');
      articleDate.className = 'date';
      articleDate.textContent = article.date;
      articleDiv.appendChild(articleDate);

      recentArticlesContainer.appendChild(articleDiv);

      // Verificator
      const isGridView = dualModeContainer.classList.contains('grid-mode');
      if (!isGridView) {
        articleDiv.removeChild(articleImage);
      }
      else{
	const styleSheet = document.getElementById('extrastyle').sheet;
        styleSheet.insertRule('.recent-article { height: 40vw; }', styleSheet.cssRules.length);
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
      console.error('Erreur :', error);
    });
});
