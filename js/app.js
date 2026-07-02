/*======================================
    PIXELVISTA
    APPLICATION ENTRY POINT
======================================*/

import api from "./api.js";
import { renderGallery } from "./gallery.js";
import { initializeLazyLoading } from "./lazyload.js";
import { initializeSearch } from "./search.js";
import { initializeChips } from "./chips.js";
import {initializeInfiniteScroll} from "./infinite-scroll.js";
import {state }from "./state.js";
import { initializeModal } from "./modal.js";
import { updateFavoritesCounter } from "./favorites.js";
import {

    showFavorites

} from "./favorites-view.js";
import {

    initializeNavigation

} from "./navigation.js";
import { initializeTheme } from "./theme.js";

state.isSearching = false;

state.currentPage = 1;
/**
 * Initialize Application
 */
async function initializeApp() {

    console.log("🚀 PixelVista Started");

    try {
        state.showingFavorites = false;
        // Fetch curated images
        const data = await api.getCuratedPhotos();

        // Render gallery
        renderGallery(data.photos);

        // Enable lazy loading
        initializeLazyLoading();
        initializeInfiniteScroll();
        initializeSearch();
        initializeChips();
        initializeNavigation();
        initializeModal();
        initializeTheme();
        updateFavoritesCounter();
        console.log("✅ Gallery Rendered Successfully");

    } catch (error) {

        console.error("❌ Application Error:", error);

    }

}
document

.getElementById("show-favorites")

.addEventListener(

    "click",

    showFavorites

);
// Start the application
initializeApp();