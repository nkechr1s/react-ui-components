import React, { useState } from "react";
import Input from "./ui/Input/Input";
import Textarea from "./ui/Textarea/Textarea";
import Button from "./ui/Buttons/Button";
import SecondaryButton from "./ui/Buttons/SecondaryButton";

const App = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="flex flex-col justify-center content-center flex-wrap w-[500px]  items-start mx-auto pb-16 pt-16">
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
        <button
          className="mb-2 absolute block top-[10px] right-[10px] translate-x-0 translate-y-[50%]"
          onClick={togglePassword}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            wfd-invisible="true"
          >
            <g clipPath="url(#clip0_1_2)">
              <path
                d="M0.666656 7.5C0.666656 7.5 3.33332 2.5 7.99999 2.5C12.6667 2.5 15.3333 7.5 15.3333 7.5C15.3333 7.5 12.6667 12.5 7.99999 12.5C3.33332 12.5 0.666656 7.5 0.666656 7.5Z"
                stroke="#666666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 9.375C9.10457 9.375 10 8.53553 10 7.5C10 6.46447 9.10457 5.625 8 5.625C6.89543 5.625 6 6.46447 6 7.5C6 8.53553 6.89543 9.375 8 9.375Z"
                stroke="#666666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="16" height="15" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>

      </div>
      <Textarea
        rows="10"
        ariaInvalid="false"
        ariaLabel="email"
        placeHolder=" "
        id="email"
        label="email"
        required
      />
      <div className="w-[500px]">
        <Button text="Click me" />
        <SecondaryButton text="Secondary" />
      </div>
    </div>
  );
};

export default App;
