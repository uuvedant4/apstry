import { useState, useRef, useEffect } from "react";
import "./SideBar.css";
import { useTheme } from "../../context/ThemeContext";
import Button from "../../assets/Button.svg";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";
import LightButton from "../../assets/LightButton.svg";

const SideBar = () => {
  const [, setScrollY] = useState(0);
  const innerDivRef = useRef(null);
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleMode = (mode) => {
    setIsDarkMode(mode);
  };

  const handleScroll = () => {
    const newScrollY = window.scrollY / 2;
    setScrollY(newScrollY);
    const innerDiv = innerDivRef.current;
    if (innerDiv) {
      innerDiv.style.opacity = "1";
      innerDiv.style.transform = `translateY(${newScrollY}px)`;
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
      {window.innerWidth >= 480 ? (
        <div className="sidebar">
          <div
            style={{
              borderColor: isDarkMode ? "#6667AB" : "rgb(210, 205, 205)",
            }}
            className="switcher"
          >
            <div
              style={{
                backgroundColor: isDarkMode && "#161519",
                color: isDarkMode && "#FFFFFF",
              }}
              onClick={() => toggleMode(false)}
              className={!isDarkMode ? "active" : "inactive"}
            >
              <span>Light</span>
            </div>
            <div
              style={{
                color: isDarkMode && "#17161B",
              }}
              onClick={() => toggleMode(true)}
              className={isDarkMode ? "active" : "inactive"}
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
