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

    /**
     * Common headers
     */

    get headers() {

        return {

            Authorization: this.apiKey

        };

    }

    /**
     * Generic Request
     */

    async request(endpoint) {

        try {

            const response = await fetch(

                `${this.baseURL}${endpoint}`,

                {

                    headers: this.headers

                }

            );

            if (!response.ok) {

                throw new Error(

                    `HTTP Error : ${response.status}`

                );

            }

            return await response.json();

        }

        catch(error){

            console.error(

                "API Error:",

                error.message

            );

            throw error;

        }

    }

    /**
     * Curated Photos
     */

    async getCuratedPhotos(page = 1){

        return await this.request(

            `/curated?page=${page}&per_page=${CONFIG.PER_PAGE}`

        );

    }

    /**
     * Search Photos
     */

    async searchPhotos(

        query,

        page = 1

    ){

        return await this.request(

            `/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${CONFIG.PER_PAGE}`

        );

    }

}

const api = new PexelsAPI();

export default api;