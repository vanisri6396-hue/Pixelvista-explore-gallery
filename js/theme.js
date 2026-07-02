/*======================================
    PIXELVISTA
    THEME ENGINE
======================================*/

const STORAGE_KEY = "pixelvista-theme";

const toggleButton = document.querySelector(".theme-toggle");

export function initializeTheme(){

    const savedTheme =
        localStorage.getItem(STORAGE_KEY);

    if(savedTheme){

        document.documentElement.setAttribute(

            "data-theme",

            savedTheme

        );

        updateIcon(savedTheme);

    }

    toggleButton.addEventListener(

        "click",

        toggleTheme

    );

}

function toggleTheme(){

    const currentTheme =

        document.documentElement.getAttribute(

            "data-theme"

        ) || "dark";

    const newTheme =

        currentTheme === "dark"

        ? "light"

        : "dark";

    document.documentElement.setAttribute(

        "data-theme",

        newTheme

    );

    localStorage.setItem(

        STORAGE_KEY,

        newTheme

    );

    updateIcon(newTheme);

}

function updateIcon(theme){

    toggleButton.textContent =

        theme === "dark"

        ? "🌙"

        : "☀️";

}