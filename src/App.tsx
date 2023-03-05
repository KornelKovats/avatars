import { useEffect } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
  useEffect(() => {
    const color = '#282c39';
    document.body.style.background = color;
    document.body.style.color = '#fff';
  });

  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
