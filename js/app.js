/*======================================
    PIXELVISTA
    APPLICATION ENTRY POINT
======================================*/

import api from "./api.js";
import { renderGallery } from "./gallery.js";
import { initializeLazyLoading } from "./lazyload.js";

/**
 * Initialize Application
 */
async function initializeApp() {

    console.log("🚀 PixelVista Started");

    try {

        // Fetch curated images
        const data = await api.getCuratedPhotos();

        // Render gallery
        renderGallery(data.photos);

        // Enable lazy loading
        initializeLazyLoading();

        console.log("✅ Gallery Rendered Successfully");

    } catch (error) {

        console.error("❌ Application Error:", error);

    }

}

// Start the application
initializeApp();