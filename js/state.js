/*======================================
    PIXELVISTA
    APPLICATION STATE
======================================*/

export const state = {

    photos: [],

    currentIndex: -1,

    currentPage: 1,

    currentQuery: "",

    isSearching: false,

    isLoading: false,

    showingFavorites: false

};

/**
 * Store current gallery
 */

export function setPhotos(photos){

    state.photos = photos;

}

/**
 * Set active image
 */

export function setCurrentIndex(index){

    state.currentIndex = index;

}

/**
 * Reset Pagination
 */

export function resetPagination(){

    state.currentPage = 1;

}

/**
 * Get Current Photo
 */

export function getCurrentPhoto(){

    return state.photos[state.currentIndex];

}