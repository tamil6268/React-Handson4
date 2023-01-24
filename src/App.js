import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Routes/Home';
import Students from './Routes/Students';
import ContactUs from './Routes/ContactUs';
import Error from './Routes/Error';
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <div id="container">
          <Link id="one" to="/Home">Home</Link>
          <Link id="one" to="/Students">Students</Link>
          <Link id="one" to="/ContactUs">Contact-Us</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Students" element={<Students />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
