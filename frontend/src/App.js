import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./Pages/Home";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
