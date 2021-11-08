import { useMemo } from "react";

const LoginPage = () => {
  const initialData = useMemo(
    () => ({
      username: "",
      password: "",
    }),
    []
  );

  const handlerSubmit = (evt) => evt.preventDefault;

  return (
    <form
      className="flex flex-col w-full p-10 px-8 pt-6 "
      autoComplete="off"
      noValidate
      onSubmit={handlerSubmit}
    >
      <label htmlFor="username">User Name:</label>
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 mr-4 "
        id="username"
        placeholder="User Name"
        onChange={() => {}}
        required
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 mr-4 "
        id="password"
        placeholder="Password"
        onChange={() => {}}
        required
      ></input>
      <button className="form__button" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
