// Fetch and display news from Markdown files
async function loadNews() {
  const response = await fetch('/_posts/news');
  const posts = await response.json();
  
  let html = '';
  posts.forEach(post => {
    html += `
      <div class="news-card">
        <img src="${post.image}" alt="${post.title}">
        <div class="news-card-content">
          <h3>${post.title}</h3>
          <div class="date">${new Date(post.date).toLocaleDateString()}</div>
          <p>${post.excerpt}</p>
          <a href="#" class="read-more">Read More →</a>
        </div>
      </div>
    `;
  });
  
  document.getElementById('news-container').innerHTML = html;
}

loadNews();