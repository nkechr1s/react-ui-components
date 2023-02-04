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

      {/* PASSWORD START */}
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
          {passwordShown ? (
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
          ) : (
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.168 0.244942C2.09352 0.167286 2.00509 0.105686 1.90778 0.0636583C1.81046 0.0216312 1.70616 0 1.60082 0C1.49549 0 1.39118 0.0216312 1.29387 0.0636583C1.19655 0.105686 1.10812 0.167286 1.03364 0.244942C0.883214 0.401775 0.798706 0.614487 0.798706 0.836284C0.798706 1.05808 0.883214 1.27079 1.03364 1.42763L5.53115 6.11672C5.2466 6.6686 5.14018 7.30137 5.22766 7.92126C5.31513 8.54115 5.59185 9.11516 6.0168 9.55821C6.44174 10.0013 6.9923 10.2898 7.58686 10.381C8.18142 10.4722 8.78835 10.3612 9.31768 10.0645L13.8152 14.7536C13.8895 14.8317 13.9778 14.8937 14.0752 14.9359C14.1725 14.9782 14.2769 15 14.3824 15C14.4878 15 14.5922 14.9782 14.6896 14.9359C14.7869 14.8937 14.8753 14.8317 14.9495 14.7536C15.0244 14.6762 15.0839 14.5841 15.1244 14.4826C15.165 14.3811 15.1858 14.2722 15.1858 14.1623C15.1858 14.0523 15.165 13.9435 15.1244 13.842C15.0839 13.7405 15.0244 13.6484 14.9495 13.571L2.168 0.244942ZM7.99159 8.7486C7.67379 8.7486 7.36901 8.61698 7.14429 8.38269C6.91957 8.1484 6.79332 7.83063 6.79332 7.49929V7.44099L8.03953 8.74027L7.99159 8.7486Z"
                fill="#666666"
              ></path>
              <path
                d="M8.16739 11.6643C4.73235 11.7476 2.4796 8.6743 1.77661 7.49994C2.27707 6.66764 2.87851 5.90621 3.56603 5.23452L2.39972 4.06017C1.49808 4.9459 0.725659 5.96448 0.107025 7.0835C0.0369118 7.21012 0 7.35374 0 7.49994C0 7.64614 0.0369118 7.78977 0.107025 7.91638C0.610299 8.82421 3.30241 13.3301 8.00762 13.3301H8.20733C9.09209 13.3027 9.9654 13.1138 10.7876 12.772L9.52543 11.4561C9.08156 11.5778 8.62608 11.6477 8.16739 11.6643ZM15.8763 7.0835C15.365 6.15901 12.5451 1.5199 7.77595 1.66981C6.89119 1.69718 6.01788 1.88604 5.19568 2.22784L6.45786 3.54378C6.90172 3.42204 7.35721 3.3522 7.8159 3.33556C11.2429 3.24395 13.4957 6.32559 14.2067 7.49994C13.6939 8.33473 13.0789 9.09628 12.3773 9.76536L13.5836 10.9397C14.4965 10.0563 15.2798 9.03761 15.9082 7.91638C15.9735 7.78686 16.005 7.64169 15.9994 7.49548C15.9938 7.34926 15.9513 7.20717 15.8763 7.0835Z"
                fill="#666666"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {/* PASSWORD END */}

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
