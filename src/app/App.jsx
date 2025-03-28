import "./app.css";
import { PizzaHeader } from "../components/PizzaHeader/PizzaHeader";
import { Home } from "../pages/Home/Home";
import { Routes, Route } from "react-router";
import { Cart } from "../pages/Crat/Cart";

function App() {
  return (
    <>
      <PizzaHeader />
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="React-pizza/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
