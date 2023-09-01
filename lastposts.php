fetch('php2.json') 
				.then(response => response.json())
				.then(articles => {
					const recentArticlesContainer = document.querySelector('.recent-articles');
					const maxRecentArticles = 5; 

					for (let i = 0; i < Math.min(articles.length, maxRecentArticles); i++) {
						const articleDiv = document.createElement('div');
						articleDiv.className = 'recent-article';
						const a = document.createElement('a');
						a.href = articles[i].lien;
						a.textContent = articles[i].titre;
						articleDiv.appendChild(a);
						recentArticlesContainer.appendChild(articleDiv);
					}
				})
				.catch(error => console.error('JSON error :', error));