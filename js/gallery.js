/*======================================
    PIXELVISTA
    GALLERY ENGINE
======================================*/

import { openModal } from "./modal.js";
import { SELECTORS } from "./config.js";
import {
    state,
    setPhotos,
    setCurrentIndex
} from "./state.js";
import {
    isFavorite,
    toggleFavorite
} from "./favorites.js";
import { showToast } from "./toast.js";

const galleryElement = document.querySelector(SELECTORS.gallery);

// Store every photo by its ID
const photoMap = new Map();

/*======================================
    Create Image Card
======================================*/

export function createImageCard(photo) {

    photoMap.set(photo.id, photo);

    return `
        <article
            class="image-card"
            data-id="${photo.id}">

            <div class="image-card__image-wrapper">

                <button
                    class="favorite-btn"
                    data-id="${photo.id}"
                    aria-label="Toggle Favorite">

                    ${isFavorite(photo.id) ? "❤️" : "🤍"}

                </button>

                <div class="skeleton skeleton--image"></div>

                <img
                    class="image-card__image lazy-image"
                    src="${photo.src.tiny}"
                    data-medium="${photo.src.medium}"
                    data-large="${photo.src.large}"
                    alt="${photo.alt}"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low">

            </div>

            <div class="image-card__content">

                <div class="image-card__top">

                    <h3 class="image-card__title">
                        ${photo.photographer}
                    </h3>

                </div>

                <div class="image-card__bottom">

                    <span>
                        ${photo.width} × ${photo.height}
                    </span>

                    <a
                        href="${photo.url}"
                        target="_blank"
                        class="btn btn--secondary">

                        View

                    </a>

                </div>

            </div>

        </article>
    `;
}

/*======================================
    Attach Click Events
======================================*/

function attachCardEvents() {

    galleryElement.onclick = (event) => {

        const favoriteButton = event.target.closest(".favorite-btn");

        // Favorite button clicked
        if (favoriteButton) {

            event.stopPropagation();

            const id = Number(favoriteButton.dataset.id);

            const photo = photoMap.get(id);

            toggleFavorite(photo);

            favoriteButton.textContent =
                isFavorite(id) ? "❤️" : "🤍";

            favoriteButton.classList.add("animate");

            setTimeout(() => {
                favoriteButton.classList.remove("animate");
            }, 350);

            showToast(
                isFavorite(id)
                    ? "Added to Favorites ❤️"
                    : "Removed from Favorites 🤍"
            );

            return;
        }

        // Image card clicked
        const card = event.target.closest(".image-card");

        if (!card) return;

        const id = Number(card.dataset.id);

        const photo = photoMap.get(id);

        const index = state.photos.findIndex(
            p => p.id === id
        );

        setCurrentIndex(index);

        openModal(photo);

    };

}

/*======================================
    Render Gallery
======================================*/

export function renderGallery(photos) {

    setPhotos(photos);

    galleryElement.innerHTML = "";

    galleryElement.innerHTML = photos
        .map(createImageCard)
        .join("");

    attachCardEvents();

}

/*======================================
    Append Gallery
======================================*/

export function appendGallery(photos) {

    state.photos.push(...photos);

    galleryElement.insertAdjacentHTML(
        "beforeend",
        photos
            .map(createImageCard)
            .join("")
    );

    attachCardEvents();

}

/*======================================
    Clear Gallery
======================================*/

export function clearGallery() {

    galleryElement.innerHTML = "";

    photoMap.clear();

    state.photos = [];

}