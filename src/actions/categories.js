import api from '../axios/api';
// ADD_PROJECT
export const setCategories = project => ({
  type: "SET_CATEGORIES",
  project
});

export const startGetCategories = (projectData = {},auth) => {
  return (dispatch, getState) => {
    api.get(`/category/`).then(function (response) {
        setCategories(response.data)
    }).catch(function (error) {
        console.log(error.response)
    });
  };
};
