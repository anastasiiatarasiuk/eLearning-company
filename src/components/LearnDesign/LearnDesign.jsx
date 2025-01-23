import "./LearnDesign.scss";

const LearnDesign = () => {
  return (
    <>
      <section className="design">
        <img src="/images/Vector-11.png" className="design__image" />
        <div className="design__container">
          <div className="design__content">
            <div className="design__title">
              <h2 className="design__heading">We Design Learning.</h2>
              <p className="design__subtitle">What We Can Do For You?</p>
              <button type="button" className="design__button">
                Know more
              </button>
            </div>
            <div>
              <img src="/images/designer.webp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnDesign;
