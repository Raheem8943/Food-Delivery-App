import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="Header">
        <div className="logo">
          <img
            src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
            alt=""
          />
        </div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="productList"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
