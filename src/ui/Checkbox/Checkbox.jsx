import React from "react";

const Checkbox = ({
  className,
  label,
  value,
  onChange,
  href,
  required,
  linkTitle,
}) => {
  return (
    <div className="relative mb-2 w-full">
      <label className="text-black flex gap-1 items-center">
        <input
          className={className}
          type="checkbox"
          checked={value}
          onChange={onChange}
          required={required}
        />
        {label}
        {href && (
          <a className="underline" href={href}>
            {linkTitle}
          </a>
        )}
        {required && "*"}
      </label>
    </div>
  );
};
export default Checkbox;
