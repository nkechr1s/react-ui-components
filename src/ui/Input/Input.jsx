import React from "react";

const Input = ({
  type,
  onChange,
  className,
  placeHolder,
  ariaLabel,
  value,
  name,
  id,
  label,
  required,
}) => {
  return (
    <div className="relative mb-2">
      {id &&
        (required ? (
          <label htmlFor={id}>{name}*</label>
        ) : (
          <label htmlFor={id}>{name}</label>
        ))}
      {id && <br />}
      <input
        type={type}
        className={className}
        onChange={onChange}
        placeholder={placeHolder}
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
