const usersDataReducerDefaultState = [];

export default (state = usersDataReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "EDIT_USER":
      return state.map(user => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
