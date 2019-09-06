import uuid from "uuid";
export const addUserData = user => ({
  type: "ADD_USER",
  user
});

export const startAddUserData = (userData = {}) => {
  return dispatch => {
    const uid = uuid;
    const {
      fullName = "",
      email = "",
      cpf = "",
      birthDate = 0,
      cellPhone = ""
      // description = "",
      // note = "",
      // amount = 0,
      // createdAt = 0
    } = userData;
    const user = { fullName, email, cpf, birthDate, cellPhone };
    console.log("pi");
    dispatch(addUserData({ id: uid(), ...user }));
  };
};
