import { API_URL_PHOTOS, ACCESS_KEY } from "./consts.js"
export const getData = ({ page = 1, count, idPhoto }) => {
  const url = new URL(API_URL_PHOTOS);

  url.searchParams.set('client_id', ACCESS_KEY);

  if (page && count) {
    url.searchParams.append('per_page', count);
    url.searchParams.append('page', page);
  }

  if (idPhoto) {
    url.pathname += `/${idPhoto}`;
  }

  return fetch(url)
    .then((data) => {
      return data.json()
    })
}