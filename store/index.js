import axios from 'axios';
import ObjectToFormData from 'object-to-formdata';

export const state = () => ({
    step: 1,
    started: false,
    token: '',
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
            currency: 'EUR' // ISO 4217 currency code
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
        if(step == 1) {
            state.started = true;
        }
        state.step = step;
    },
    token(state, token) {
        state.token = token;
    }
};

export const actions = {
    submit({state}) {
        return new Promise((resolve, reject) => {
            let data = Object.assign({}, state.data);
            data.address = state.data.address.line1;
            
            if(state.data.address.line2) {
                data.address += ', ' + state.data.address.line2;
            }

            data.address += ', ' +state.data.address.zip + ', ' + state.data.address.country;
            data.voice = Object.assign({}, state.data.voice, {samples: [ ]});
            data.experience = Object.assign({}, state.data.experience);
            data.salary = Object.assign({}, state.data.salary);

            let token = state.token;
            let files = new FormData();


            for(let i in state.data.voice.samples) {
                let sample = state.data.voice.samples[i];
                let file = sample.data;
                files.append(file.name, file);
                                
                data.voice.samples.push({
                    language: sample.language,
                    data: file.name
                });
            }

            console.log('Data', data);
            console.log('Files', files);
            let formData = ObjectToFormData(data, {}, files);
            
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }

            let url = process.env.POST_URL;
            axios.post(url, formData, {
                headers: {
                    'Auth': token,
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}