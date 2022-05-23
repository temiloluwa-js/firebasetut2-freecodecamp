import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase-config";
import Home from "./Home";
import { signOut } from "firebase/auth";
import Login from "./Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "login";
    });
  };

  return (
    <div>
      {isAuth && <button onClick={signOut}>Sign Out</button>}
      <Router>
        <nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
            <Route path="/createpost"></Route>
          </Routes>
          {/* <Link to="/createpost">Create Post</Link> */}
        </nav>
      </Router>
    </div>
  );
}

export default App;
