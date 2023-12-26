export function loadCatalog() {
  return fetch('https://raw.githubusercontent.com/diogoribeiro/datasets/main/netflix-tv-shows-movies.json');
}
