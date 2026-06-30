/*======================================
    PIXELVISTA
    GALLERY ENGINE
======================================*/

import { SELECTORS } from "./config.js";

const galleryElement = document.querySelector(
    SELECTORS.gallery
);

/**
 * Create one Image Card
 */

export function createImageCard(photo) {

    return `

    <article class="image-card">

       <div class="image-card__image-wrapper">

    <!-- Skeleton Loader -->
    <div class="skeleton skeleton--image"></div>

    <!-- Actual Image -->
    <img
        class="image-card__image lazy-image"
        src="https://placehold.co/20x20/0f172a/0f172a"
        data-src="${photo.src.large}"
        alt="${photo.alt}"
    >

</div>

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
                    class="btn btn--secondary"
                >

                    View

                </a>

            </div>

        </div>

    </article>

    `;

}

/**
 * Render Gallery
 */

export function renderGallery(photos) {

    galleryElement.innerHTML = photos

        .map(createImageCard)

        .join("");

}

/**
 * Clear Gallery
 */

export function clearGallery(){

    galleryElement.innerHTML = "";

}