/*======================================
        PIXELVISTA MODAL
======================================*/

import { state, setCurrentIndex } from "./state.js";
import { showToast } from "./toast.js";

const modal = document.querySelector("#image-modal");

const modalImage = document.querySelector("#modal-image");

const photographer = document.querySelector("#modal-photographer");

const resolution = document.querySelector("#modal-resolution");

const downloadButton = document.querySelector("#modal-download");

const pexels = document.querySelector("#modal-pexels");

const closeButton = document.querySelector("#modal-close");

const backdrop = document.querySelector(".modal__backdrop");

const previousButton = document.querySelector("#modal-prev");

const nextButton = document.querySelector("#modal-next");

/*======================================
        Display Photo
======================================*/

function showPhoto(photo) {

    modalImage.style.opacity = "0";

    modalImage.onload = () => {

        modalImage.style.opacity = "1";

    };

    modalImage.src = photo.src.large2x;

    modalImage.alt = photo.alt;

    photographer.textContent = photo.photographer;

    resolution.textContent = `${photo.width} × ${photo.height}`;

    downloadButton.href = photo.src.original;

    downloadButton.download =
        `${photo.photographer.replace(/\s+/g, "_")}_${photo.id}.jpg`;

    pexels.href = photo.url;

    downloadButton.onclick = () => {

        downloadButton.textContent = "Downloading...";

        downloadButton.classList.add("loading");

        showToast("⬇️ Download Started");

        setTimeout(() => {

            downloadButton.textContent = "Download";

            downloadButton.classList.remove("loading");

        }, 1500);

    };

}

/*======================================
        Open Modal
======================================*/

export function openModal(photo) {

    modal.classList.add("active");

    showPhoto(photo);

}

/*======================================
        Close Modal
======================================*/

export function closeModal() {

    modal.classList.remove("active");

}

/*======================================
        Previous Image
======================================*/

function showPrevious() {

    if (state.currentIndex <= 0) return;

    setCurrentIndex(state.currentIndex - 1);

    showPhoto(state.photos[state.currentIndex]);

}

/*======================================
        Next Image
======================================*/

function showNext() {

    if (state.currentIndex >= state.photos.length - 1) return;

    setCurrentIndex(state.currentIndex + 1);

    showPhoto(state.photos[state.currentIndex]);

}

/*======================================
        Initialize Modal
======================================*/

export function initializeModal() {

    closeButton.addEventListener("click", closeModal);

    backdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeModal();

        }

        if (modal.classList.contains("active")) {

            if (event.key === "ArrowLeft") {

                showPrevious();

            }

            if (event.key === "ArrowRight") {

                showNext();

            }

        }

    });

    previousButton.addEventListener("click", showPrevious);

    nextButton.addEventListener("click", showNext);

}