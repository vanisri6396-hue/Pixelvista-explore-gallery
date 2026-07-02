import api from "./api.js";

import {

    appendGallery

} from "./gallery.js";

import {

    initializeLazyLoading

} from "./lazyload.js";

import {

    SELECTORS

} from "./config.js";

import{ state} from "./state.js";

const trigger=document.querySelector(

    SELECTORS.scrollTrigger

);

const observer=new IntersectionObserver(

    async(entries)=>{

    if(!entries[0].isIntersecting) return;

    if(state.showingFavorites) return;

    if(state.isLoading) return;

    state.isLoading = true;

    state.currentPage++;
        
       try{

    let data;

    if(state.isSearching){

        data = await api.searchPhotos(

            state.currentQuery,

            state.currentPage

        );

    }else{

        data = await api.getCuratedPhotos(

            state.currentPage

        );

    }

    appendGallery(

        data.photos

    );

    initializeLazyLoading();

}
catch(error){

    console.error(

        "Infinite Scroll Error:",

        error

    );

}
finally{

    state.isLoading = false;

}
    }
)
export function initializeInfiniteScroll() {

    observer.observe(trigger);

}