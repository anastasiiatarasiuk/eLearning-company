import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="navigation__content">
          <img src="/images/logo.webp" alt="logo" />
          <nav className="navigation__list">
            <ul className="list">
              <li className="list__item">
                <a href="#home">Home</a>
              </li>
              <li className="list__item">
                <a href="#">Services</a>
              </li>
              <li className="list__item">
                <a href="#instructional">Instructional Design</a>
              </li>
              <li className="list__item">
                <a href="#">eLearning Development</a>
              </li>
              <li className="list__item">
                <a href="#">eLearning Price Quote</a>
              </li>
              <li className="list__item">
                <a href="#">eLearning Packages</a>
              </li>
              <li className="list__item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
