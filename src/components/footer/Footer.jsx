import FooterLogo from "../../assets/FooterLogo.svg";
import Email from "../../assets/Email.svg";
import FooterLogoDark from "../../assets/FooterLogoDark.svg";
import "./Footer.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{ backgroundColor: `${isDarkMode ? "black" : ""}` }}
      className="footer"
    >
      <div className="logo-container">
        <img src={isDarkMode ? FooterLogoDark : FooterLogo} alt="footer-logo" />
      </div>
      <div className="email-container">
        <div className="mail">
          <img src={Email} alt="email" />
          <span style={{ color: `${isDarkMode ? "#FFFFFF" : ""}` }}>
            connect@apostrfy.com
          </span>
        </div>
        <div className="separator"></div>
        <div
          style={{ color: `${isDarkMode ? "#FFFFFFB2" : ""}` }}
          className="copyright"
        >
          © 2023 All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
