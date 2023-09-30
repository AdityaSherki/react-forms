import { useState } from "react";
// import AdvancedForm from "./components/AdvancedForm";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Register
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Log In
        </h3>
      </nav>
      {view === "basic" ? <Register /> : <AdvancedForm />}
    </div>
  );
}

export default App;