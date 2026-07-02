/*======================================
    PIXELVISTA
    LAZY LOADING ENGINE
======================================*/

const observerOptions = {

    root: null,

    rootMargin: "200px",

    threshold: 0.1

};

/**
 * Load Image
 */

function loadImage(image) {

    const medium = image.dataset.medium;
    const large = image.dataset.large;

    if (!medium || !large) return;

    // Stage 1: Load medium image
    const mediumImage = new Image();

    mediumImage.src = medium;

    mediumImage.onload = () => {

        image.src = medium;

        image.classList.add("loaded");

        const skeleton = image.previousElementSibling;

        if (skeleton) {

            skeleton.classList.add("skeleton--hidden");

            setTimeout(() => skeleton.remove(), 400);

        }

        // Stage 2: Load large image
        const largeImage = new Image();

        largeImage.src = large;

        largeImage.onload = () => {

            image.src = large;

        };

    };

}

/**
 * Observer Callback
 */

function handleIntersection(entries, observer){

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        loadImage(entry.target);

        observer.unobserve(entry.target);

    });

}

/**
 * Intersection Observer
 */

const observer = new IntersectionObserver(

    handleIntersection,

    observerOptions

);

/**
 * Observe all lazy images
 */

export function initializeLazyLoading(){

    const images = document.querySelectorAll(".lazy-image");

    images.forEach(image=>{

        observer.observe(image);

    });

}