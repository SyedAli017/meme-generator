import "../styles/header.css";
import headerLogo from "../assets/images/troll-face.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img className="header-logo" src={headerLogo} alt="troll face" />
        <h1 className="header-title">Meme Generator</h1>
      </div>
      <h3 className="header-subtitle">React Project</h3>
    </div>
  );
};

export default Header;
