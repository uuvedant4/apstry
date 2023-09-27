import "./App.css";
import Logo from "./assets/Logo.svg";
import ContentImage from "./assets/MainImage.svg";
import Footer from "./components/footer/Footer";
import SideBar from "./components/side-bar/SideBar";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div
        style={{ backgroundColor: `${isDarkMode ? "#161519" : ""}` }}
        className="App"
      >
        <header className="header">
          <img src={Logo} alt="logo" />
        </header>
        <div className="content">
          <img src={ContentImage} alt="illustration" />
          <SideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
