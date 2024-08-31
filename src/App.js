// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let navBarTitle = "FRAPP";
  let navBarAbout = "About";
  return (
    <>
      <Navbar title={navBarTitle} about={navBarAbout} />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
