import Input from "./ui/Input/Input";
const App = () => {
  return (
    <div className="App">
      <Input type="text" ariaLabel="name" placeholder="name" id="test" label="name" />
      <Input type="email" ariaLabel="email" placeholder="email" required />
    </div>
  );
};

export default App;
