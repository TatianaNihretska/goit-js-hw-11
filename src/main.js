

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,} from './js/render-functions.js';
const user = document.querySelector('.form');

user.addEventListener('submit', e => {
  e.preventDefault();
const formData = new FormData(e.target);
  const searchQuery = formData.get('search-text').trim();
  if (!searchQuery) return;

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      if (!data.hits.length) {
        iziToast.show({
          message: 'Sorry, there are no images matching your search query.',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: 'white',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.show({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: 'white',
      });
    })
    .finally(() => {hideLoader();});
  });