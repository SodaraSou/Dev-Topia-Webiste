import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<AboutUs />} path="/about-us" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
