const usersDataReducerDefaultState = {
  "id": "",
  "email": "",
  "fullName": "",
  "photo": "",
  "birthDate": "",
  "genre": "",
  "cpf": "",
  "nationality": "",
  "address": {
      "id": 3,
      "zipCode": "",
      "street": "",
      "number": "",
      "state": "",
      "neighbourhood": "",
      "city": "",
      "complement": ""
  },
  "contacts": []
}

export default (state = usersDataReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.user;
    case "EDIT_USER":
      return state.map(user => {
        if (user.user_id === action.user_id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        }
      });
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
};
