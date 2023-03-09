import React, { useState } from "react";
import Input from "./ui/Input/Input";
import Button from "./ui/Buttons/Button";

const App = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailError =
      !email || !/\S+@\S+\.\S{2,}/.test(email) || email.split("@")[1].split(".").pop().length < 2;
    setEmailError(emailError);
    setEmailErrorMessage(emailError ? "Please enter a valid email address" : "");
  
    const passwordError =
      !password || password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password);
    setPasswordError(passwordError);
    setPasswordErrorMessage(
      passwordError
        ? "Password must be at least 8 characters long and contain at least 1 number and 1 uppercase letter"
        : ""
    );
  
    if (!emailError && !passwordError) {
      console.log('logged in!');
    }
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
    setEmailErrorMessage("");
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
    setPasswordErrorMessage("");
  };

  return (
    <form
      className="flex flex-col justify-center content-center flex-wrap w-[900px]  items-start mx-auto pb-16 pt-16"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        aria-label="email"
        placeholder=" "
        id="email"
        label="email"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        isRequired
        autoComplete="email"
        errorMessage={emailErrorMessage}
      />

      <Input
        type="password"
        aria-label="password"
        placeholder=" "
        id="password"
        label="password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
        isRequired
        autoComplete="current-password"
        errorMessage={passwordErrorMessage}
      />

      <Button text="call it" />
    </form>
  );
};

export default App;
