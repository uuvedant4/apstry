import { useState, useRef, useEffect } from "react";
import "./SideBar.css";
import { useTheme } from "../../context/ThemeContext";
import Button from "../../assets/Button.svg";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";
import LightButton from "../../assets/LightButton.svg";

const SideBar = () => {
  const [, setScrollY] = useState(25);
  const innerDivRef = useRef(null);
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [isDarkMode]);

  const toggleMode = (mode) => {
    setIsDarkMode(mode);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const newScrollY = window.scrollY / 2;
    setScrollY(newScrollY);
    const innerDiv = innerDivRef.current;
    if (innerDiv) {
      innerDiv.style.opacity = "1";
      document.getElementById("liner").style.height =
        (newScrollY / 1.3 < 25 ? 25 : newScrollY / 1.3) + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {windowWidth > 480 ? (
        <div className="sidebar">
          <div
            style={{
              borderColor: isDarkMode ? "#6667AB" : "rgb(210, 205, 205)",
            }}
            className="switcher"
          >
            <div
              style={{
                color: isDarkMode && "#FFFFFF",
              }}
              onClick={() => toggleMode(false)}
            >
              <span>Light</span>
            </div>
            <div
              style={{ color: isDarkMode && "black" }}
              className={`active-mode-button ${isDarkMode && "dark-active"}`}
            >
              <span>{isDarkMode ? "Dark" : "Light"}</span>
            </div>
            <div
              style={{
                color: isDarkMode && "#17161B",
              }}
              onClick={() => toggleMode(true)}
            >
              <span>Dark</span>
            </div>
          </div>
          <div className="scroller">
            <div style={{ color: isDarkMode && "#A2A0FF" }} className="info">
              Scroll To Top
            </div>
            <div
              style={{
                backgroundColor: isDarkMode && "#514A78",
              }}
              className="line"
            >
              <div
                id="liner"
                style={{
                  borderColor: isDarkMode && "#A2A0FF",
                }}
                className="inner-div"
                ref={innerDivRef}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-view">
          {isDarkMode && (
            <div>
              <img className="moon" src={Moon} alt="moon" />
            </div>
          )}
          <div
            className={isDarkMode ? "dark" : "light"}
            onClick={() => toggleMode((prev) => !prev)}
          >
            <img
              className="btn"
              src={!isDarkMode ? LightButton : Button}
              alt="button"
            />
          </div>
          {!isDarkMode && (
            <div>
              <img className="sun" src={Sun} alt="sun" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SideBar;
