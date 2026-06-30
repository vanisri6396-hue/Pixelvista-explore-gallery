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

    const source = image.dataset.src;

    if (!source) return;

    image.src = source;

    image.onload = () => {

        // Fade in the image
        image.classList.add("loaded");

        // Remove skeleton loader
        const skeleton = image.previousElementSibling;

        if (skeleton && skeleton.classList.contains("skeleton")) {

            skeleton.remove();

        }

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