import uuid from "uuid";
export const addUserData = user => ({
  type: "ADD_USER",
  user
});

export const startAddUserData = (userData = {}) => {
  return dispatch => {
    const {
      id,
      birthDate = 0,
      cpf = "",
      cellPhone = "",
      email = "",
      facebook = "",
      fullName = "",
      linkedin = "",
      instagram = "",
      password = ""
      // description = "",
      // note = "",
      // amount = 0,
      // createdAt = 0
    } = userData;
    const user = {
      id,
      birthDate,
      cpf,
      cellPhone,
      email,
      facebook,
      fullName,
      linkedin,
      instagram,
      password
    };

    dispatch(addUserData(user));
  };
};

export const editUser = (id, updates) => ({
  type: "EDIT_USER",
  id,
  updates
});

//START_EDIT_EXPENSE
export const startEditUser = (id, updates) => {
  return dispatch => {
    dispatch(editUser(id, updates));
  };
};
