import { useState } from "react";
// import AdvancedForm from "./components/AdvancedForm";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [view, setView] = useState("login");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("register")}
          style={{ color: view === "register" ? "#fff" : "" }}
        >
          Register
        </h3>
        <h3
          onClick={() => setView("login")}
          style={{ color: view === "login" ? "#fff" : "" }}
        >
          Log In
        </h3>
      </nav>
      {view === "login" ? <Login /> : <Register />}
    </div>
  );
}

export default App;