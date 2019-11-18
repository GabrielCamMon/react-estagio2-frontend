import api from '../axios/api';
// ADD_PROJECT
export const setProject = project => ({
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
    console.log(project)
    api.post(`/project/`, project, {headers:{Authorization:`Token ${token}`}}).then(function (response) {
        console.log(response)
    }).catch(function (error) {
        console.log(error.response)
    });
  };
};

export const startGetProjects = (projectData = {},auth) => {
  return (dispatch, getState) => {
    api.get("/project/").then(function (response) {
      console.log(response.data)
        dispatch(setProject(response.data))
    }).catch(function (error) {
        console.log(error.response)
    });
  };
};

