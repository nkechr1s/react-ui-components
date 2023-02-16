import React from "react";

const Checkbox = ({ linkTitle, required, label, href, onChange, ...props }) => {
  return (
    <div className="relative mb-2 w-full">
      <label className="text-gray-400 flex gap-1 items-center">
        <input
          {...props}
          type="checkbox"
          required={required}
          onChange={onChange}
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
