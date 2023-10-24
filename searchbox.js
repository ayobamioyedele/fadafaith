javascript
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  searchResults.innerHTML = '';

  fetch(`https://api.example.com/search?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(result => {
        const resultElement = document.createElement('p');
        resultElement.textContent = result.title;
        searchResults.appendChild(resultElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});