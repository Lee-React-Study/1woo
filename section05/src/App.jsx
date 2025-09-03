import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"안녕"} color={"blue"} />
      <Button text={"하이"}>
        <div>자식</div>
      </Button>
    </>
  );
}

export default App;
