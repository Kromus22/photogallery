import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js';
import { renderPhoto } from './renderPhoto.js';
import { authorisation } from './authorisation.js';
import { handlerLike } from './handlerLike.js';

const init = async ({ selectorGalleryWrapper, selectorPhotoWrapper, selectorAuthBtn }) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoWrapper);
  const authBtn = document.querySelector(selectorAuthBtn);

  authorisation(authBtn);

  if (galleryWrapper) {
    const photos = await getData({ count: 30 });
    renderGallery(galleryWrapper, photos);
  }

  if (photoWrapper) {
    const url = new URL(location.href);
    const idPhoto = url.searchParams.get('photo');

    if (idPhoto) {
      const photo = await getData({ idPhoto });
      const photoLike = renderPhoto(photoWrapper, photo);

      photoLike.addEventListener('click', () => {
        if (localStorage.getItem('Bearer')) {
          handlerLike(photoLike);
        }
      })
    }
  }
};

init({ selectorGalleryWrapper: '.gallery__wrapper', selectorPhotoWrapper: '.photo__wrapper', selectorAuthBtn: '.header__login-button' });