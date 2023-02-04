import React from "react";

const Input = ({ type, onChange, className, placeholder, arialLabel, value, name, required }) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        arial-label={arialLabel}
        value={value}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
