import React from "react";

const Input = ({
  type,
  onChange,
  className,
  placeholder,
  ariaLabel,
  value,
  name,
  id,
  label,
  required,
}) => {
  return (
   
      <input
        type={type}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={value}
        name={name}
        id={id}
        label={label}
        required={required}
      />
    
  );
};

export default Input;
