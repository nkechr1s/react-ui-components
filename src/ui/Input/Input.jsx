const Input = ({
  id,
  label,
  required,
  error,
  errorMessage,
  isRequired,
  ...props
}) => {
  return (
    <>
      {error && (
        <span className="text-red-600 text-sm mt-1 mb-2">{errorMessage}</span>
      )}
      <div className="relative mb-2 w-full">
        <input
          id={id}
          required={required}
          {...props}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1
        ${
          error ? "border-red-600" : "border-gray-300"
        } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer border`}
        />
        {id && (
          <label
            htmlFor={id}
            className={`absolute text-sm ${
              error ? "text-red-600" : "text-gray-400"
            } duration-300 transform -translate-y-4
           scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600
           peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
           peer-focus:-translate-y-4 left-1`}
          >
            {label} {isRequired && "*"}
          </label>
        )}
      </div>
    </>
  );
};

export default Input;
