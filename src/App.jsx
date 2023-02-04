import Input from "./ui/Input/Input";
const App = () => {
  return (
    <div className="flex flex-col justify-center content-center flex-wrap w-full absolute items-start mx-auto pb-16">
      <Input
        type="text"
        ariaLabel="name"
        placeHolder="name"
        id="test"
        name="tt"
        label="name"
      />
      <Input
        type="email"
        ariaLabel="email"
        placeHolder="email"
        name="test"
        id="email"
        required
      />
    </div>
  );
};

export default App;
