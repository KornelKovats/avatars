import { margin } from "@mui/system";
import { useEffect } from "react";
import Users from "./components/Users";

function App() {
  useEffect(() => {
    const color = '#282c39';
    document.body.style.background = color;
    document.body.style.color = '#fff';
  });

  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      }}>
      <Users/>
    </div>
  );
}

export default App;
