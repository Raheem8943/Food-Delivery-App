import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <div className="footer"></div>
    </div>
  );
}

export default App;
