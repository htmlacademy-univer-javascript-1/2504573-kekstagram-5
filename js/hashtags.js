import { isElementFocused, isEscapePressed } from './utils.js';
import { closeModal } from './form.js';

const MAX_TAG_COUNT = 5;
const TAG_PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_COMMENT_LENGTH = 140;

export const validateCommentLength = (input) => {
  const trimmedInput = input.trim();
  return trimmedInput.length <= MAX_COMMENT_LENGTH;
};

const cleanTags = (tags) => tags.toLowerCase()
  .split(' ')
  .filter((tag) => tag);

export const areTagsUnique = (tags) => {
  const tagsArray = cleanTags(tags);
  return new Set(tagsArray).size === tagsArray.length;
};
export const isTagsCountValid = (tags) => cleanTags(tags).length <= MAX_TAG_COUNT;
export const validateTags = (tags) => cleanTags(tags).every((tag) => TAG_PATTERN.test(tag));

export const handleKeyDown = (event) => {
  if (isEscapePressed(event) &&
    !(isElementFocused('text__description') || isElementFocused('text__hashtags')) &&
    !document.querySelector('.error')
  ) {
    closeModal();
  }
};

