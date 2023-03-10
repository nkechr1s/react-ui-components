const buttonClassNames = {
  primary: `w-full bg-sky-500 rounded flex p-3 items-center justify-center 
  transition text-white font-normal ease-in-out hover:bg-sky-700 mb-2`,
  secondary: `w-full bg-white border border-sky-500 rounded flex p-3 items-center justify-center 
  text-sky-500 font-normal transition ease-in-out hover:bg-sky-500 hover:text-white mb-2`,
};

const Button = ({ buttonType, text, onClick, href, ...props }) => {

  const ButtonComponent = href ? "a" : "button";
  const buttonProps = {
    ...(href ? { href } : { onClick }),
    ...props,
    className: buttonClassNames?.[buttonType] ?? buttonClassNames.primary,
  };

  return <ButtonComponent {...buttonProps}>{text}</ButtonComponent>;
};

export default Button;
