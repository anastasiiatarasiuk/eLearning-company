import "./ServiceCard.scss";

const ServiceCard = ({ service }) => {
  const { title, description, icon, color } = service;

  return (
    <div className={`service-card card-modifier--${color}`}>
      <div className="card__image">
        <img src={icon} alt={`${title} Icon`} className="card__icon" />
      </div>
      <h4 className="card__title">{title.toUpperCase()}</h4>
      <hr className="card__line" />
      <p className="card__text">{description}</p>
    </div>
  );
};

export default ServiceCard;
