import "./App.css";
import Input from "./ui/Input/Input";
const App = () => {
  return (
    <div className="App">
      <Input type="text" arialLabel="name" placeholder="name" id="test" />
      <Input type="email" arialLabel="email" placeholder="email" required />
    </div>
  );
};

export default App;
