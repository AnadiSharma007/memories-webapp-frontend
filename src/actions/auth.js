import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async(dispatch) => {
    try {
        // Log in the user

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        // Sign up the user

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}