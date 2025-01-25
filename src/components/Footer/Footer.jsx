import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__main-container">
          <div className="footer__logo-container">
            <img
              src="/images/footer-logo.webp"
              alt="logo"
              className="footer__logo"
            />
            <p className="footer__slogan">Taking learning to the next level</p>
          </div>
          <div className="footer__links-container">
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <a href="#home" className="footer__link">
                  Home eLearning
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#services" className="footer__link">
                  Price Quote Services
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#instructional" className="footer__link">
                  Instructional Design
                </a>
              </li>
            </ul>
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  eLearning Development
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Mobile Learning
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Product Training
                </a>
              </li>
            </ul>
            <ul className="footer__links-list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Custom eLearning
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  eLearning for Retail
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  eLearning Packages
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright-container">
          <p className="footer__copyright-text">
            Copyright &#169; 2016 eLearning Company
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
