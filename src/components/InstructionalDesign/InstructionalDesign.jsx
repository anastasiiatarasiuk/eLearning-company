import SvgIcon from "../SvgIcon/SvgIcon";
import "./InstructionalDesign.scss";

const InstructionalDesign = () => {
  return (
    <>
      <section className="instructional" id="instructional">
        <div className="instructional__container">
          <h2 className="instructional__title">Instructional Design</h2>
          <div className="instructional__content">
            <img src="/images/team.webp" alt="Team" />
            <div className="instructional__learning">
              <h3 className="instructional__learning-title">
                We know learning inside and out
              </h3>
              <p className="instructional__learning-subtitle">
                Our instructional design team will work hard to align your
                business goals with your learning objectives to ensure the
                training supports your business strategies.
              </p>
              <ul className="instructional__learning-list">
                <li className="instructional__learning-list-item">
                  <SvgIcon id="icon-check" className="instructional__icon" />
                  <p>
                    Each project requires a unique approach, and we are ready
                    for the challenge
                  </p>
                </li>
                <li className="instructional__learning-list-item">
                  <SvgIcon id="icon-check" className="instructional__icon" />
                  <p>
                    Our expertise in the training and development industry will
                    make your project a success
                  </p>
                </li>
                <li className="instructional__learning-list-item">
                  <SvgIcon id="icon-check" className="instructional__icon" />
                  <p>Your goals and deadlines are our priority</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructionalDesign;
