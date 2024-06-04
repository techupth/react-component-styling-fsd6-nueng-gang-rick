
import "./App.css";
import { Alert,Error,Warn,Success } from "./components/Alert";
import { ButtonPrinary } from "./components/Button";
import { ButtonSecondary } from "./components/Button";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <ButtonPrinary />
        <ButtonSecondary />
      </div>
      <hr />
      <div className="alert-components-section">
        <Error/>
        <Warn/>
        <Alert/>
        <Success/>
      </div>
    </div>
  );
}

export default App;
