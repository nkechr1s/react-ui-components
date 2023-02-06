import React from "react";

const Checkbox = ({linkTitle,required, ...props }) => {
  return (
    <div className="relative mb-2 w-full">
      <label className="text-gray-400 flex gap-1 items-center">
        <input type="checkbox" {...props} required={required} />
        {props.label}
        {props.href && (
          <a className="underline" href={props.href}>
            {linkTitle}
          </a>
        )}
        {required && "*"}
      </label>
    </div>
  );
};
export default Checkbox;
