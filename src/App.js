import { render } from "react-dom";
import Header from './components/Header';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Airtime from './pages/Airtime'
import Smssub from './pages/Smssub'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Errorpage from "./pages/Errorpage";
import Teams from "./pages/Teams";
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/airtime" element={<Airtime />} />
        <Route path="/smssub" element={<Smssub />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <div className="Footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
