import Input from "./ui/Input/Input";
const App = () => {
  return (
    <div className="flex flex-col justify-center items-start mx-auto pb-16">
      <Input
        type="text"
        ariaLabel="name"
        placeholder="name"
        id="test"
        label="name"
      />
      <Input type="email" ariaLabel="email" placeholder="email" required />
    </div>
  );
};

export default App;
