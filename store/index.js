export const state = () => ({
    step: 1,
    data: {
        name: '',
        email: '',
        phone: '', // including area codes
        address: {
            line1: '',
            line2: '',
            zip: '',
            country: ''
        },
        voice: {
            gender: '', // male | female
            age: '', // young | mature
            // samples: {
            //   "language": '', // ISO 639-1 two-letter code
            //   "data": string // key name (not file name) of the accompanying MP3 file
            // }[]
            samples: []
        },
        experience: {
            // "secondaryLanguages"?: {
            //   "language": string, // ISO 639-1 two-letter code
            //   "proficiency": number // 1: Basic, 2: Independent, 3: Proficient
            // }[],
            secondaryLanguages: [],
            genres: '',
            education: '',
            experience: '',
            booksNarrated: '', // how many books have you previously narrated?
            referenceWorks: '' // links to previous narrations, e.g. on Storytel
        },
        erotica: false, // would you consider reading erotica?
        salary: {
            hourlyWage: 0, // wage per finished hour of audiobook
            currency: 'DKK' // ISO 4217 currency code
        },
        hasOwnStudio: false, // do you have a recording studio?
        canHaveStudio: false, // can a studio be set up in your home/office?
        publicDisplay: false // may we display your name and sound sample on the publicly accesible part of the website?
    }
});

export const mutations = {
    data(state, data) {
        state.data = Object.assign({}, state.data, data);
    },
    step(state, step) {
        state.step = step;
    }
};