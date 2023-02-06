import React, { useState } from "react";
import Input from "./ui/Input/Input";
import Textarea from "./ui/Textarea/Textarea";
import Button from "./ui/Buttons/Button";
import SecondaryButton from "./ui/Buttons/SecondaryButton";
import { ReactComponent as EyeIcon } from "./assets/eye.svg";
import { ReactComponent as EyeIconHide } from "./assets/eyeHide.svg";
import Checkbox from "./ui/Checkbox/Checkbox";
const App = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <div className="flex flex-col justify-center content-center flex-wrap w-[900px]  items-start mx-auto pb-16 pt-16">
      <Input
        type="text"
        ariaLabel="name"
        placeHolder=" "
        id="test"
        label="name"
      />
      <Input
        type="email"
        ariaLabel="email"
        placeHolder=" "
        id="email"
        label="email"
        required
      />

      <div className="relative w-full">
        <Input
          type={passwordShown ? "text" : "password"}
          ariaLabel="password"
          placeHolder=" "
          id="password"
          label="password"
          minLength="8"
          required
        />
        <div
          className="mb-2 absolute block top-[10px] right-[10px] translate-x-0 translate-y-[50%] cursor-pointer"
          onClick={togglePassword}
        >
          {passwordShown ? <EyeIcon /> : <EyeIconHide />}
        </div>
      </div>

      <Checkbox
        className="w-4 h-4 cursor-pointer"
        label="My value"
        checked={isChecked}
        onChange={handleOnChange}
        href="test"
        linkTitle="Όροι χρήσης"
        required
      />
      <p className="text-gray-600">Above checkbox is {isChecked ? "checked" : "unchecked"}.</p>
      <Textarea
        rows="10"
        ariaInvalid="false"
        ariaLabel="email"
        placeHolder=" "
        id="email"
        label="email"
        required
      />
      <div className="w-[900px]">
        <Button text="Click me" />
        <SecondaryButton text="Secondary" />
      </div>
    </div>
  );
};

export default App;
