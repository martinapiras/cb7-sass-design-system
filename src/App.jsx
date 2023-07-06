import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import InputToggle from "./components/Form/InputToggle";
import Badge from "./components/Badge";
import InputText from "./components/Form/InputText";
import InputPassword from "./components/Form/InputPassword";
import InputSelect from "./components/Form/InputSelect";
import Dropdown from "./components/Form/Dropdown";
import { options } from "./mocks/options.js";

function App() {
  const [inputTextValue, setInputTextValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputSelectValue, setInputSelectValue] = useState("");

  return (
    <>
      <div className="container">
        <InputText
          id={"name"}
          name="name"
          placeholder="Your name"
          label={"Name"}
          // error
          errorMessage={"Inserisci il tuo nome"}
          handleChange={setInputTextValue}
          // line
        />
        <InputPassword
          id={"password"}
          name="password"
          placeholder="Your password"
          label={"Password"}
          // error
          errorMessage={"Inserisci la tua password"}
          handleChange={setInputPasswordValue}
          line
        />
        <InputText
          id={"name"}
          name="name"
          placeholder="Your name"
          label={"Name"}
          error
          errorMessage={"Inserisci il tuo nome"}
          handleChange={setInputTextValue}
        />
        <InputSelect
          options={options}
          defaultValue={options?.options[1]?.value}
          handleChange={setInputSelectValue}
        />
        <Dropdown options={options} />
      </div>
      <div className="container">
        <hr />
        <hr />
        <hr />
      </div>
      <div className="buttons-row">
        <Button label="Click me" icon size="xl" />
        <Button label="Click me" icon size="lg" outline />
        <Button label="Click me" icon />
        <Button label="Click me" icon iconLeft outline />
        <Button icon square />
        <Button icon square outline />
      </div>
      <div className="container">
        <InputToggle toggled={false} />
        <InputToggle toggled={true} />
      </div>
      <div className="container">
        <Badge label="Large" size="lg" outline />
        <Badge label="Large" size="lg" icon iconLeft />
        <Badge label="Medium" outline />
        <Badge label="Medium" icon />
        <Badge label="Small" size="sm" outline />
        <Badge label="Small" size="sm" icon iconLeft />
        <Badge label="L" circle size="lg" />
        <Badge label="M" circle outline />
        <Badge label="S" circle size="sm" />
      </div>
    </>
  );
}

export default App;
