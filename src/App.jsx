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
import InputCheckbox from "./components/Form/InputCheckbox";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [inputTextValue, setInputTextValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputSelectValue, setInputSelectValue] = useState("");

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <InputCheckbox checked />
        <InputCheckbox />
      </div>
      <div className="container">
        <hr />
        <hr />
        <hr />
      </div>
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
    </>
  );
}

export default App;
