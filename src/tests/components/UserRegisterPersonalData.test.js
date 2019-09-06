import React from "react";
import { shallow } from "enzyme";
import { UserRegisterPersonalDataForm } from "../../components/UserRegisterPersonalDataForm";
import users from "../fixtures/users";

let startAddUsersData, wrapper, history;

beforeEach(() => {
  startAddUsersData = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <UserRegisterPersonalDataForm
      startAddUsersData={startAddUsersData}
      history={history}
    />
  );
});

test("should render UserRegisterPersonalData correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

// test("should handle onSubmit", () => {
//   wrapper.find("AddUserRegisterPersonalDataForm").prop("onSubmit")(users[0]);
//   expect(history.push).toHaveBeenLastCalledWith("/");
//   expect(startAddUsersData).toHaveBeenLastCalledWith(users[0]);
// });
