import Homepage from "./Pages/Home/Homepage";
import Menu from "./Pages/Menu/Menu";
import Contact from "./Pages/Contact/Contact";
import Reservation from "./Pages/Reservation/Reservation";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './Styles/app.scss'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component element={<Homepage />} />
          <Route path="/home" exact component element={<Homepage />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
