import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <>
<div className="backC">
  <nav className="upNav">
    <div className="upMain1">
    <Link to='signin' href="https://www.facebook.com/bongodev">support@bongodev.com</Link>
  <a> +880-1911666994</a>
    </div>
    <div>
<Link to="/signin" className="signBtn">SIGN IN</Link>

    </div>

  </nav>
  </div> 
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/experiences" element={<Experiences />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
