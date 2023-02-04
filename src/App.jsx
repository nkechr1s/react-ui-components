import React from "react";
import Input from "./ui/Input/Input";
import Textarea from "./ui/Textarea/Textarea";

const App = () => {
  return (
    <div className="flex flex-col justify-center content-center flex-wrap w-full  items-start mx-auto pb-16 pt-16">
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
      <Textarea
        rows="10"
        ariaInvalid="false"
        ariaLabel="email"
        placeHolder=" "
        id="email"
        label="email"
        required
      />
    </div>
  );
};

export default App;
