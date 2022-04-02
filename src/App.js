import CSS from "./App.module.css";
import Title from "./components/TItle";
import Button3d1 from "./components/Buttons/Button3d1";
import Dice from "./components/Buttons/Dice";

function App() {
  return (
    <>
      <Title>Love 4 Buttons</Title>
      <div className={CSS.container}>
        <Dice />
      </div>
    </>
  );
}

export default App;
