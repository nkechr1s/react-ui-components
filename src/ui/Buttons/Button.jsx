import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="w-full bg-sky-500 rounded flex p-3 item-center 
      justify-center transition text-white font-normal ease-in-out hover:bg-sky-700 mb-2"
    >
      {text}
    </button>
  );
};

export default Button;
