export const getImageUrl=(path) =>{
    return new URL(`/assets/${path}`,import.meta.url).href;
    // here the path is argument
    // appending the relative path to the base url
}