import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <Router>
      <nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Link to="/createpost">Create Post</Link>
      </nav>
    </Router>
  );
}

export default App;
