import { generatePhotos } from './data.js';
import {createPhotosElement} from './drawing-thumbnails.js';
const photos = generatePhotos();
createPhotosElement(photos);

