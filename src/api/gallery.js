const fetchGallery = ({ id, search, page }) => {
  return fetch(`https://api.unsplash.com/search/photos?client_id=${id}&query=${search}&page=${page}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Ошибка выполнения сетевого запроса');
    })
    .then(data => ({ data: data.results, totalPages: data.total_pages }))
    .catch(error => ({ data: [], error }));
};

export { fetchGallery };