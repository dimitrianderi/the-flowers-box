export const getImageUrl = (path, name = 'slider') => {
    return new URL(`../assets/img/${name}/${path}.jpg`, import.meta.url).href;
};