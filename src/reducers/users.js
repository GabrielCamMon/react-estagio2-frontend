const usersDataReducerDefaultState = [];

export default (state = usersDataReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    default:
      return state;
  }
};
