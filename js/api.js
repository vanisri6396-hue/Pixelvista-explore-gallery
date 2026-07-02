/*======================================
    PIXELVISTA
    PEXELS API SERVICE
======================================*/

import { CONFIG } from "./config.js";

class PexelsAPI {

    constructor() {

        this.baseURL = CONFIG.BASE_URL;
        this.apiKey = CONFIG.API_KEY;

    }

    /*======================================
        REQUEST HEADERS
    ======================================*/

    get headers() {

        return {

            Authorization: this.apiKey

        };

    }

    /*======================================
        GENERIC API REQUEST
    ======================================*/

    async request(endpoint) {

        try {

            const response = await fetch(

                `${this.baseURL}${endpoint}`,

                {

                    method: "GET",

                    headers: this.headers

                }

            );

            if (!response.ok) {

                throw new Error(

                    `HTTP ${response.status} - ${response.statusText}`

                );

            }

            return await response.json();

        }

        catch (error) {

            console.error("❌ API Error:", error);

            throw error;

        }

    }

    /*======================================
        CURATED PHOTOS
    ======================================*/

    async getCuratedPhotos(page = 1) {

        return await this.request(

            `/curated?page=${page}&per_page=${CONFIG.PER_PAGE}`

        );

    }

    /*======================================
        SEARCH PHOTOS
    ======================================*/

    async searchPhotos(query, page = 1) {

        return await this.request(

            `/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${CONFIG.PER_PAGE}`

        );

    }

    /*======================================
        GET SINGLE PHOTO
    ======================================*/

    async getPhotoById(id) {

        return await this.request(

            `/photos/${id}`

        );

    }

}

const api = new PexelsAPI();

export default api;