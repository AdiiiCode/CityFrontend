// import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import ImageGallery from "./Components/ImageGallery ";
import ImageUpload from "./Components/ImageUpload ";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Home/:id" element={<Home />} />
          <Route path="/admin" element={<ImageUpload/>} />
          <Route path="/admins" element={<ImageGallery/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
