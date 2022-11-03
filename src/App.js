import Navbar from "./Navbar";
import App2 from "./AppRouter";
import Bootstrap from "./AppBootstrap";
import NavbarSass  from "./components/NavbarSass";
import MainPage from "./components/MainPage";


import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Register />  */}
       {/* <NavbarSass /> */}
      <MainPage />
      <Navbar />
      <App2 />
      {/* <Bootstrap /> */}
       
    </div>
  );
}

export default App;
