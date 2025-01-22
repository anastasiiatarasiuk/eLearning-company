import Slider from "../Slider/Slider";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header" id="home">
        <div className="container content">
          <div className="card">
            <img src="/images/card-logo.webp" alt="logo" className="logoImg" />
            <p className="cardText">Taking Learning to the Next Level</p>
            <ThemeSwitcher />
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
