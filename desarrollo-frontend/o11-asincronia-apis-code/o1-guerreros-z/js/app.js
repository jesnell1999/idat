import { getCharacters } from "./services/dragonball.service.js";

document.addEventListener('DOMContentLoaded', async () => {
  let page = 1;
  let limit = 10;
  let isLoading = true;
  let errorObj = null;
  let characters = [];

  const charactersGrid = document.getElementById('charactersGrid');
  const loadingPlaceholder = document.querySelector('.loading-placeholder');
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  const getAllCharacters = async (page, limit) => {
    isLoading = true;
    if (isLoading) {
      loadingPlaceholder.style.display = 'block';
      charactersGrid.style.display = 'none';
    }
    try {
      const { items } = await getCharacters(page, limit);
      characters = items;
      renderCharacters();
    } catch (error) {
      errorObj = error;
    } finally {
      isLoading = false;
    }
    if (!isLoading) {
      loadingPlaceholder.style.display = 'none';
      charactersGrid.style.display = 'grid';
    }
  };

  const renderCharacters = () => {
    let html = '';
    characters.forEach(character => {
      html += `
        <div class="character-card">
          <img src="${character.image}" alt="${character.name}" class="character-card__image">
          <div class="character-card__header">
            <h2 class="character-card__title">${character.name}</h2>
            <p class="character-card__race">${character.race}</p>
          </div>
          <div class="character-card__content">
            <p class="character-card__description">${character.description}</p>
          </div>
        </div>
      `;
    });
    charactersGrid.innerHTML = html;
  };

  getAllCharacters(page, limit);

  viewMoreBtn.addEventListener('click', () => {
    page++;
    getAllCharacters(page, limit);
  });
});