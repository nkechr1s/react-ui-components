import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button
      className="w-full bg-white border border-sky-500 rounded flex p-3 item-center 
      justify-center text-sky-500 font-normal transition ease-in-out hover:bg-sky-500 hover:text-white mb-2"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
