import Slider from "../Slider/Slider";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header" id="home">
        <div className="header__content">
          <div className="header__card">
            <img
              src="/images/card-logo.webp"
              alt="logo"
              className="header__card-logo"
            />
            <p className="header__card-text">
              Taking Learning to the Next Level
            </p>
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
