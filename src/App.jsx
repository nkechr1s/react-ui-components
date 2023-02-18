import React, { useState } from "react";
import Input from "./ui/Input/Input";
import Textarea from "./ui/Textarea/Textarea";
import Button from "./ui/Buttons/Button";
import { ReactComponent as EyeIcon } from "./assets/eye.svg";
import { ReactComponent as EyeIconHide } from "./assets/eyeHide.svg";
import Checkbox from "./ui/Checkbox/Checkbox";
import Grid from "../Grid";
const App = () => {
  const [passwordShown, setPasswordShown] = useState();
  const [isChecked, setIsChecked] = useState();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col justify-center content-center flex-wrap items-start mx-auto pb-16 pt-16">
      <Grid />
    </div>
  );
};

export default App;
