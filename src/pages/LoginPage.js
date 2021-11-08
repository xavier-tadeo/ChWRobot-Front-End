import { useEffect, useMemo, useState } from "react";

const LoginPage = () => {
  const initialData = useMemo(
    () => ({
      username: "",
      password: "",
    }),
    []
  );

  // const initialData = {
  //   username: "",
  //   password: "",
  // };

  const [userData, setUserData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (event) => {
    setUserData({
      ...userData,
      [event.target.value]: event.target.id,
    });
  };

  useEffect(() => {
    setIsDisabled(userData.username === "" || userData.password === "");
  }, [userData]);

  const handlerSubmit = (evt) => evt.preventDefault();

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
        placeholder="username"
        onChange={onChange}
        value={userData.username}
        required
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        className="w-full px-4 py-2 mt-2 mr-4 "
        id="password"
        placeholder="password"
        onChange={onChange}
        value={userData.password}
        required
      ></input>
      <button
        className={
          isDisabled
            ? "cursor-not-allowed rounded-md disabled:opacity-60"
            : "rounded-md focus:ring-2 hover:bg-blue-800"
        }
        disabled={isDisabled}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
