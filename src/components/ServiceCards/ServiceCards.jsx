import ServiceCard from "../ServiceCard/ServiceCard";
import "./ServiceCards.scss";

const ServiceCards = ({ data }) => {
  return (
    <div className="services-list">
      {data.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceCards;
