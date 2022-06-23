import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="air-home-page">
      <Navbar />
      <hr />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
