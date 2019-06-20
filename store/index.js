import _ from 'underscore';
import SwannAPI from "~/plugins/SwannAPI.js";

export const state = () => ({
    contentData: { },
    narrators: [ ],

});

export const mutations = {
    contentdata(state, value) {
        state.contentData = value;
    },
    narrators(state, value) {
        state.narrators = value;
    }
};

export const actions = {
    getContentData({commit, state}) {
        return new Promise((resolve, reject) => {
            if(!_.isEmpty(state.contentData)) {
                return resolve(state.contentData);
            } else {
                SwannAPI.getContentData().then((resp) => {
                    commit('contentdata', resp.data);
                    resolve();
                }).catch((err) => reject(err));
            }
        });
    },

    getNarrators({commit, state}) {
        return new Promise((resolve, reject) => {
            if(!_.isEmpty(state.narrators)) {
                return resolve();
            } else {
                SwannAPI.getNarrators().then((resp) => {
                    commit('narrators', resp.data);
                    resolve();
                }).catch((err) => reject(err));
            }
        })
    }
}