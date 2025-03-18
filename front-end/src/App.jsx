import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Contributors from "./pages/Contributors";
import Rules from "./pages/Rules";
import Header from "./components/Header";
import MessageSent from "./pages/MessageSent";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/message-sent" element={<MessageSent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
