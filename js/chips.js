/*======================================
    PIXELVISTA CATEGORY CHIPS
======================================*/

import { SELECTORS } from "./config.js";
import { searchPhotos } from "./search.js";

const container = document.querySelector(
    SELECTORS.chipsContainer
);

const input = document.querySelector(
    SELECTORS.searchInput
);

/**
 * Initialize Chips
 */

export function initializeChips(){

    container.addEventListener("click", async (event)=>{

        const chip = event.target.closest(".chip");

        if(!chip) return;

        document.querySelectorAll(".chip").forEach(button=>{

            button.classList.remove("active");

        });

        chip.classList.add("active");

        const category = chip.dataset.category;

        input.value = category;

        await searchPhotos(category);

    });

}