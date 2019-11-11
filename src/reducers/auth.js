const authDataReducerDefaultState = {
  "token": "",
  "user_id": "",
  "email": ""
  }
  
  export default (state = authDataReducerDefaultState, action) => {
    switch (action.type) {
      case "SET_LOGIN":
        return  action.auth;
      case "LOGOUT":
        return {};
      default:
        return state;
    }
  };
  