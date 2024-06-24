import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/login";
import Menu from "./components/Menu";
import { useState } from "react";
import OrderForm from "./components/OrderForm";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/Menu" element={<Menu />} />
        <Route
          path="/Signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
