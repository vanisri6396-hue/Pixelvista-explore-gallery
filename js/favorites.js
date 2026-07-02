/*======================================
    PIXELVISTA
    FAVORITES MANAGER
======================================*/

const STORAGE_KEY = "pixelvista-favorites";

/**
 * Load favorites
 */

export function getFavorites() {

    return JSON.parse(

        localStorage.getItem(STORAGE_KEY)

    ) || [];

}

/**
 * Save favorites
 */

function saveFavorites(favorites) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(favorites)

    );

}

/**
 * Check favorite
 */

export function isFavorite(id){

    return getFavorites().some(

        photo => photo.id === id

    );

}

/**
 * Toggle favorite
 */

export function toggleFavorite(photo){

    const favorites = getFavorites();

    const index = favorites.findIndex(

        item => item.id === photo.id

    );

    if(index === -1){

        favorites.push(photo);

    }

    else{

        favorites.splice(index,1);

    }

    saveFavorites(favorites);

    updateFavoritesCounter();

}
export function updateFavoritesCounter(){

    const counter=document.querySelector(

        "#favorites-counter"

    );

    if(!counter) return;

    const total=getFavorites().length;

    counter.textContent=`❤️ ${total}`;

}