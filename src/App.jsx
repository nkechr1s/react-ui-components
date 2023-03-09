import React, { useState } from "react";
import Input from "./ui/Input/Input";
import Button from "./ui/Buttons/Button";

const App = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Please enter your email address");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Please enter an email");
    } else if (!/\S+@\S+\.\S{2,}/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      const domain = email.split("@")[1];
      const domainSegments = domain.split(".");
      if (domainSegments[domainSegments.length - 1].length < 2) {
        setEmailError(true);
        setEmailErrorMessage("Please enter a valid email address");
      } else {
        setEmailError(false);
        setEmailErrorMessage("");
      }
    }

    if (!emailError && !passwordError) {
      // handle form submission
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false); // reset error state when user types in input
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false); // reset error state when user types in input
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
        errorMessage={passwordErrorMessage}
      />

      <Button text="call it" />
    </form>
  );
};

export default App;
