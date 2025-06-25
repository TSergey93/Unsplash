const fetchGallery = ({ id, search, page }) => {
  return fetch(`https://api.unsplash.com/search/photos?client_id=${id}&query=${search}&page=${page}`)
    .then(response => response.json())
    .then(data => ({ results: data.results, totalPages: data.total_pages }));
};

export { fetchGallery };