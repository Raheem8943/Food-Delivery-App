import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import AppStore from "./DataStore/AppStore";
function App() {
  return (
    <div className="app-container">
      <Provider store={AppStore}>
        <Header />
        <Outlet />
      </Provider>
      <div className="footer"></div>
    </div>
  );
}

export default App;
