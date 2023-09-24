fetch('php2.json') 
				.then(response => response.json())
				.then(articles => {
					const recentArticlesContainer = document.querySelector('.recent-articles2');
					const maxRecentArticles = 10; 

					for (let i = 0; i < Math.min(articles.length, maxRecentArticles); i++) {
						const articleDiv = document.createElement('div');
						articleDiv.className = 'recent-article';
						const a = document.createElement('a');
						a.href = articles[i].link;
						a.textContent = articles[i].title;
						articleDiv.appendChild(a);
						recentArticlesContainer.appendChild(articleDiv);
					}
				})
				.catch(error => console.error('JSON error :', error));
