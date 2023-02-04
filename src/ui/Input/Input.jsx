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
    <div>
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
    </div>
  );
};

export default Input;
