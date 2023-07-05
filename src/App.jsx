import "./App.scss";
import Button from "./components/Button";
import InputToggle from "./components/Form/InputToggle";

function App() {
  return (
    <>
      {/* <h1 className="heading-1">Title</h1> */}
      {/* <div className="container">
        <div className="row-g">
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
          <div className="col-g-1">Col 1</div>
        </div>
      </div> */}
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
    </>
  );
}

export default App;
