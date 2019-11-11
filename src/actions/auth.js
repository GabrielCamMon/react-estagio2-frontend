import uuid from "uuid";
import api from '../axios/api';
import {startSetUser} from "./users"

export const login = auth => ({type: "SET_LOGIN", auth});

export const logout = () => ({
    type: "LOGOUT"
  });

export const startLogin = (authData = {}) => {
    return dispatch => {
        const {
            email = "",
            password = "",
        } = authData;

        const auth = {
            username:email,
            password
        };

        console.log(auth)
        api.post('/login/', auth).then(function (response) {
            dispatch(startSetUser(response.data))
            dispatch(login(response.data));
        }).catch(function (error) {
            console.log(error)
        });

    };
};


