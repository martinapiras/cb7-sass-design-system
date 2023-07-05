import "./App.scss";
import Button from "./components/Button";
import InputToggle from "./components/Form/InputToggle";
import Badge from "./components/Badge";

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
