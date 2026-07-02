/*======================================
    PIXELVISTA
    FAVORITES VIEW
======================================*/

import { getFavorites } from "./favorites.js";
import { renderGallery } from "./gallery.js";
import { initializeLazyLoading } from "./lazyload.js";
import { state } from "./state.js";

export function showFavorites(){

    state.showingFavorites = true;

    const favorites = getFavorites();

    if(favorites.length === 0){

        document.querySelector("#gallery").innerHTML = `
            <div class="empty-state">
                <h2>❤️ No Favorites Yet</h2>
                <p>Save some beautiful photos first.</p>
            </div>
        `;

        return;
    }

    renderGallery(favorites);

    initializeLazyLoading();

}