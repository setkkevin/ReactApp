import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Login from './components/Login';
import Bootstrap from "./AppBootstrap";
import NavbarSass  from "./components/NavbarSass";

export default function App2() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='nav-links'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button><Link to="/about">BootstrapForm</Link></button>
            </li>
            <li>
              <Link to="/login">ReactForm</Link>
            </li>
            <li>
              <Link to="/users/4200">ReactSass</Link>
            </li>
            <li>
              <Link to="/does-not-exist">Catch all route</Link>
            </li>
          </ul>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/about" element={<Bootstrap />} />
          <Route path="/login" element={<Login/>} />
          {/* 👇️ handle dynamic path */}
          <Route path="/users/:userId" element={<NavbarSass />} />
          <Route path="/" element={<Home />} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About us</h2>;
}
// function House() {
//   return <h2>House</h2>;
// }

function Users() {
  const params = useParams();

  return <h2>Users: {params.userId}</h2>;
}