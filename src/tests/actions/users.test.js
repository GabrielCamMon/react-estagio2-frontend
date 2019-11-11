import configureMockStore from "redux-mock-store";

import users from "../fixtures/users";
import { addUserData, startCreateUserData } from "../../actions/users";
import thunk from "redux-thunk";

const uid = "thisismytestuid";
const defaultAuthState = { user: { id: uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  const usersData = {};
  users.forEach(({ id, fullName, email, cpf, birthDate, cellPhone }) => {
    usersData[id] = { fullName, email, cpf, birthDate, cellPhone };
  });
});

test("should setup add user action object with provided values", () => {
  const action = addUserData(users[2]);
  expect(action).toEqual({
    type: "ADD_USER",
    user: users[2]
  });
});
