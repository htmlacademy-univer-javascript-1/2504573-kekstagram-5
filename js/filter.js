import { renderPhotos, clearPhotos } from './drawing-thumbnails.js';
import { debounceFunction, pickRandomItems, randomSequenceGenerator } from './utils.js';
import { photos } from './main.js';

const DEBOUNCE_TIMEOUT = 500;
const RANDOM_COUNT = 10;
const ACTIVE_CLASS_NAME = 'img-filters__button--active';

const FILTER_HANDLERS = {
  'filter-default': () => photos,
  'filter-random': () => pickRandomItems(photos, RANDOM_COUNT, randomSequenceGenerator(0, photos.length - 1)),
  'filter-discussed': () => [...photos].sort((a, b) => b.comments.length - a.comments.length),
};

const filtersSection = document.querySelector('.img-filters');
const filtersControls = filtersSection.querySelector('.img-filters__form');

const isButton = (event) => event.target.tagName === 'BUTTON';

const filterChangeHandler = debounceFunction((event) => {
  if (isButton(event)) {
    clearPhotos();
    const chosenFilter = FILTER_HANDLERS[event.target.id];
    renderPhotos(chosenFilter());
  }
}, DEBOUNCE_TIMEOUT);

const setActiveButton = (event) => {
  if (isButton(event)) {
    const activeButton = filtersControls.querySelector(`.${ACTIVE_CLASS_NAME}`);

    if (activeButton) {
      activeButton.classList.remove(ACTIVE_CLASS_NAME);
      activeButton.disabled = true;
    }

    event.target.classList.add(ACTIVE_CLASS_NAME);
    event.target.disabled = false;
  }
};

const initFilters = () => {
  filtersControls.addEventListener('click', filterChangeHandler);
  filtersControls.addEventListener('click', setActiveButton);
};

export { initFilters };
