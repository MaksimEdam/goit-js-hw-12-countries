function fetchCountries(searchQuery) {
  const url = `https://restcountries.com/v2/name/${searchQuery}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export default fetchCountries;
