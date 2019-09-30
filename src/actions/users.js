import uuid from "uuid";
import api from '../axios/api';


export const addUserData = user => ({type: "ADD_USER", user});


export const startAddUserData = (userData = {}) => {
    return dispatch => {

        const {
            email = "",
            password = "",
            typeOfProfile = ""
        } = userData;

        const user = {
            email,
            password,
            profile:typeOfProfile
        };
            console.log(user)
        api.post('/usuario/criar', user).then(function (response) {
            dispatch(addUserData(user));
            console.log(response);
        }).catch(function (error) {
            console.log(error.response.data);
        });

    };
};

export const editUser = (id, updates) => ({type: "EDIT_USER", id, updates});

// START_EDIT_EXPENSE
export const startEditUser = (id, updates) => {
    return dispatch => {
        dispatch(editUser(id, updates));
    };
};
