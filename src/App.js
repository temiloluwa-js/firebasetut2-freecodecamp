import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase-config";
import Home from "./Home";
import { signOut } from "firebase/auth";
import Login from "./Login";

function App() {
  const [isAuth, setisAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
    });
  };
  return (
    <Router>
      <div>
        <nav>
          <Link to="/createpost">Create Post</Link>
          <Link to="/login">Login</Link>
          {!isAuth && <button onClick={signUserOut}>Sign Out</button>}
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        {/* <Route path='/login' element={</>}>Create Post</Route> */}
      </Routes>
    </Router>
  );
}

export default App;
