import "./App.scss";

function App() {
  return (
    <>
      <h1>Title</h1>
      <div className="container">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
          aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque
          optio commodi impedit quas nisi fugiat vel aut adipisci eum.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eos, provident earum, optio beatae temporibus, aliquid explicabo
          reprehenderit nihil rem soluta molestiae excepturi doloribus corporis
          incidunt dolores. Nemo, fugit in.
        </p>
      </div>
      <button className="success">
        <span>Button</span>
        <span>✔</span>
      </button>
      <button className="error">
        <span>Button</span>
        <span>❌</span>
      </button>
      <button className="secondary">
        <span>Button</span>
        <span>🐱‍👓</span>
      </button>
    </>
  );
}

export default App;
