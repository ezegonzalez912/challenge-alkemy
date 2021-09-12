import { types } from "../../types/types";

export const initialUser = JSON.parse(localStorage.getItem("user-hero_app")) || {
    token: null,
    logged: false
}

export const authReducer = (state, action) => {

    const { type, payload } = action;

    switch(type){
        case types.login:
            return {
                token: payload,
                logged: true
            };
        case types.logout:
            return {
                token: null,
                logged: false
            }
        default:
            return state;
    }
}