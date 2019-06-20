import axious from 'axios';

class SwannAPI {
    constructor() {
        this.apiURL = process.env.API_URL;
    }

    getNarrators() {
        return axious.get(this.apiURL + 'public/Narrators');
    }

    getContentData() {
        return Promise.resolve({
            "studiosTotal": 89,
            "studioCities": [
                {
                    "country": "DK",
                    "cities": [
                        "Copenhagen",
                        "Odense"
                    ]
                },
                {
                    "country": "SE",
                    "cities": [
                        "Stockholm",
                        "Göteborg"
                    ]
                }
            ],
            "narratorsTotal": 405,
            "productionsLastYear": 2013,
            "productionsThisYear": 230
        })
    }
}

export default new SwannAPI