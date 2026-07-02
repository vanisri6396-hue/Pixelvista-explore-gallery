/*======================================
    PIXELVISTA
    NAVIGATION
======================================*/

import api from "./api.js";

import { renderGallery } from "./gallery.js";

import { initializeLazyLoading } from "./lazyload.js";

import { state } from "./state.js";

const homeButton = document.getElementById("nav-home");

const galleryButton = document.getElementById("nav-gallery");
const trendingButton = document.getElementById(

    "nav-trending"

);
export function initializeNavigation(){

    trendingButton.addEventListener(

    "click",

    async(event)=>{

        event.preventDefault();

        state.showingFavorites = false;

        state.isSearching = true;

        state.currentQuery = "Trending";

        state.currentPage = 1;

        const data = await api.searchPhotos(

            "Trending"

        );

        renderGallery(data.photos);

        initializeLazyLoading();

        document

        .getElementById("gallery-section")

        .scrollIntoView({

            behavior:"smooth"

        });

        setActive(trendingButton);

    }

);

    homeButton.addEventListener(

        "click",

        async(event)=>{

            event.preventDefault();

            state.showingFavorites = false;

            state.isSearching = false;

            state.currentPage = 1;

            const data = await api.getCuratedPhotos();

            renderGallery(data.photos);

            initializeLazyLoading();

            document.getElementById("hero")

            .scrollIntoView({

                behavior:"smooth"

            });

            setActive(homeButton);

        }

    );

   galleryButton.addEventListener(

    "click",

    (event)=>{

        event.preventDefault();

        document

        .getElementById("gallery-section")

        .scrollIntoView({

            behavior:"smooth"

        });

        setActive(galleryButton);

    }

);

}

function setActive(activeLink){

    document

    .querySelectorAll(".nav-link")

    .forEach(link=>{

        link.classList.remove("active");

    });

    activeLink.classList.add("active");

}
const hero = document.getElementById("hero");

const gallery = document.getElementById("gallery-section");

window.addEventListener(

    "scroll",

    ()=>{

        const galleryTop = gallery.offsetTop - 150;

        if(window.scrollY >= galleryTop){

            setActive(galleryButton);

        }

        else{

            setActive(homeButton);

        }

    }

);
const aboutButton = document.getElementById(

    "nav-about"

);

aboutButton.addEventListener(

    "click",

    (event)=>{

        event.preventDefault();

        document

        .getElementById("about")

        .scrollIntoView({

            behavior:"smooth"

        });

        setActive(aboutButton);

    }

);