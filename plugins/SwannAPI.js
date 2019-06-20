import axious from 'axios';

class SwannAPI {
    constructor() {
        this.apiURL = process.env.API_URL;
    }

    getNarrators() {
        return axious.get(this.apiURL + 'public/Narrators');
    }

    getContentData() {
        return axious.get(this.apiURL + 'public/stats');
    }
}

export default new SwannAPI