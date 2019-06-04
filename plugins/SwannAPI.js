import axious from 'axios';

class SwannAPI {
    constructor() {
        this.apiURL = process.env.API_URL;
    }

    getNarrators() {
        return axious.get(this.apiURL + 'public/Narrators');
    }
}

export default new SwannAPI