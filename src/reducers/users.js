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
      return [...state, action.user];
    case "EDIT_USER":
      return {...state,...action.updates};
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
};
