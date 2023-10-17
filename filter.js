        //Article's table
        const articles = [
    	{
        title: "Autmun is here",
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

        const recentArticlesContainer = document.querySelector('.recent-articles2');
        const categoryFilter = document.getElementById('categoryFilter');
		const maxArticlesPerPage = 10;
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
                const articleDate = document.createElement('p');
                articleDate.className = 'date';
                articleDate.textContent = article.date;
                articleDiv.appendChild(articleDate);

                recentArticlesContainer.appendChild(articleDiv);
            });
        }

        // Hearer of events
        categoryFilter.addEventListener('change', displayArticles);

        // Display function
        displayArticles();
