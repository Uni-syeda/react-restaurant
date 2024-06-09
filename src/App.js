import About from "./components/About";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Menu from "./components/Menu";

import { useState } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <About />
      <Home />
      <Login user={user} setUser={setUser} />
      <Menu />
      <Signup user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
