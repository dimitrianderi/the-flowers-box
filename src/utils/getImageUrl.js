export const getImageUrl = (path, name = 'slider') => new URL(`../assets/img/${name}/${path}.jpg`, import.meta.url).href;
