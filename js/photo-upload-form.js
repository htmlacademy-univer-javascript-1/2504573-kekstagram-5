import {openBigPicture} from './open-big-photo.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPictureElement = (picture) => {
  const { url, description, likes, comments } = picture;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(picture);
  });

  return pictureElement;
};

const renderPhotos = (photos) => {
  const picturesFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    picturesFragment.appendChild(createPictureElement(photo));
  });

  pictures.appendChild(picturesFragment);
};

export {renderPhotos};
