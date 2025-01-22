import "./OurClients.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const OurClients = () => {
  return (
    <>
      <section className="clients">
        <div className="clients__container">
          <div className="clients__content">
            <div className="clients__work">
              <h3 className="clients__work-title">
                Our clients love the work we do
              </h3>
              <p className="clients__work-subtitle">
                We pride ourselves on developing training strategies with the
                learners in mind, ensuring your time and resources are well
                utilized.
              </p>
              <ul className="clients__work-list">
                <li className="clients__work-list-item">
                  <SvgIcon id="icon-check" className="clients__icon" />
                  <p>
                    We start each project with a careful analysiys of your
                    learning needs
                  </p>
                </li>
                <li className="clients__work-list-item">
                  <SvgIcon id="icon-check" className="clients__icon" />
                  <p>
                    We constantly look for ways to save your time and money
                    while exceeding your expectations
                  </p>
                </li>
                <li className="clients__work-list-item">
                  <SvgIcon id="icon-check" className="clients__icon" />
                  <p>
                    We don`t stop working until you are satisfied with the
                    products we deliver
                  </p>
                </li>
              </ul>
            </div>
            <img src="/images/clients.webp" alt="Clients" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
