import TalkToUsForm from "../TalkToUsForm/TalkToUsForm";
import "./TalkToUs.scss";

const TalkToUs = () => {
  return (
    <div className="talk-to-us" id="contact">
      <div className="talk-to-us__content">
        <div className="talk-to-us__title-container">
          <h2 className="talk-to-us__title">Talk To Us About Your Project</h2>
          <p className="talk-to-us__subtitle">
            We will never send spam or add you to a mailing list
          </p>
        </div>
        <TalkToUsForm />
      </div>
    </div>
  );
};

export default TalkToUs;
