import api from '../axios/api';
// ADD_PROJECT
export const addProject = project => ({
  type: "SET_PROJECTS",
  project
});

export const startAddProject = (projectData = {},auth) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const {
        title= null,
        description=null,
        summary= null,
        deadline= null,
        budget= null,
        categories= [],
        images =  []
    } = projectData;
    const project = { title, description, summary, deadline, budget, categories,images };

    api.post(`/project/`, project, {headers:{Authorization:`Token ${token}`}}).then(function (response) {
        dispatch(addProject(id, updates));
    }).catch(function (error) {
        console.log(error.response)
    });
  };
};
