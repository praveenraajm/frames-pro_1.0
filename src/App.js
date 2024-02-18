import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div /* className="App" */>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
