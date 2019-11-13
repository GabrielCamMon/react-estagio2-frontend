import uuid from "uuid";
import api from '../axios/api';
import {login} from './auth'


export const addUserData = user => ({type: "ADD_USER", user});


export const startCreateUserData = (userData = {}) => {
    return dispatch => {
        const {
            name,
            email = "",
            password = "",
            typeOfProfile = ""
        } = userData;

        const user = {
            fullName:name,
            email,
            password,
            profile:typeOfProfile
        };

        api.post('/usuario/', user).then(function (response) {
            dispatch(startSetUser(response.data))
            dispatch(login(response.data))
        }).catch(function (error) {
            console.log(error.response)
        });

    };
};

export const editUser = (id, updates) => ({type: "EDIT_USER", id, updates});

// START_EDIT_EXPENSE
export const startEditUser = (id, updates) => {
    return dispatch => {

        dispatch(editUser(id, updates));
        // api.put(`/usuario/${id}/`, updates).then(function (response) {
        // }).catch(function (error) {
        //     console.log(error.response)
        // });
       
    };
};

export const setUserData = user => ({type: "SET_USER",user});

export const startSetUser = (auth) => {
    return dispatch => {
        api.get(`/usuario/${auth.user_id}/`,{headers:{Authorization:`Token ${auth.token}`}} ).then(function (response) {
            dispatch(setUserData(response.data));
        }).catch(function (error) {
            console.log(error.response)
        });
    };
};