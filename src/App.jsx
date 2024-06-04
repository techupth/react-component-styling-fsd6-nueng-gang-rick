import "./App.css";
import Button from "./components/Button";
import { Alert,Error,Warn,Success } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <h1 className="Header=buttons">Button</h1>
      <div className="button-components-section">
        <Button style="#074EE8" Button="Button">ฺ</Button>
        <Button style="#07A4E8" Button="Button">ฺ</Button>
      </div>
      <div className="alert-components-section">
        <h1 className="Header=buttons">Alert Component</h1>
        <Error/>
        <Warn/>
        <Alert/>
        <Success/>
      </div>
    </div>
  );
}

export default App;
