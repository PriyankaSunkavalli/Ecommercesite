import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import { useState } from "react";

function App() {
  const [cartValue, setCartValue] = useState([]);
  return (
    <div>
      <Navbar cartValue={cartValue} />
      <HomeBody setCartValue={setCartValue} cartValue={cartValue} />
    </div>
  );
}

export default App;
