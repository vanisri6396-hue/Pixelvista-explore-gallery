/*======================================
        PIXELVISTA SEARCH
======================================*/

import api from "./api.js";
import { renderGallery } from "./gallery.js";
import { initializeLazyLoading } from "./lazyload.js";
import { SELECTORS } from "./config.js";
import { state } from "./state.js";

const form = document.querySelector(SELECTORS.searchForm);
const input = document.querySelector(SELECTORS.searchInput);

/**
 * Search Photos
 */

export async function searchPhotos(query) {
    state.showingFavorites = false;
    state.currentQuery = query;
    state.currentPage = 1;
    state.isSearching = true;

    try {

        const data = await api.searchPhotos(

            query,

            state.currentPage

        );

        renderGallery(data.photos);

        initializeLazyLoading();

        document.querySelector(SELECTORS.gallery).scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    catch (error) {

        console.error("Search Error:", error);

    }

}

/**
 * Debounce Utility
 */

function debounce(callback, delay) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

const debouncedSearch = debounce(async () => {

    const query = input.value.trim();

    if (query === "") return;

    await searchPhotos(query);

}, 400);

/**
 * Initialize Search
 */

export function initializeSearch() {

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const query = input.value.trim();

        if (query === "") {

            alert("Please enter a search term.");

            return;

        }

        await searchPhotos(query);

    });

    input.addEventListener("input", () => {

        debouncedSearch();

    });

}