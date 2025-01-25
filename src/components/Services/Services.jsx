import { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import ServiceCards from "../ServiceCards/ServiceCards";
import "./Services.scss";
import ColorType from "../ColorType/ColorType";
import { serviceData } from "../../data/ServicesData";
import Pagination from "react-bootstrap/Pagination";
import Occupation from "../Occupation/Occupation";

const Services = () => {
  const [selectedColor, setSelectedColor] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const filteredData = serviceData.filter((service) => {
    const matchesColor =
      selectedColor === "all" || service.color === selectedColor;
    const matchesTitle = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesOccupation =
      selectedOccupation === "all" || service.title === selectedOccupation;
    return matchesColor && matchesTitle && matchesOccupation;
  });

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentPageData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedColor, searchTerm, selectedOccupation]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="services" id="services">
      <img src="/images/Vector-10.png" className="services__image" alt="" />
      <div className="services__container">
        <h1 className="services__title">Services We Provide</h1>
        <div className="services__filters">
          <SearchBox setSearchTerm={setSearchTerm} />
          <ColorType
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <Occupation
            occupation={selectedOccupation}
            setSelectedOccupation={setSelectedOccupation}
          />
        </div>
        {currentPageData.length > 0 ? (
          <>
            <ServiceCards data={currentPageData} />
            <Pagination className="custom-pagination">
              <Pagination.Prev
                onClick={() =>
                  handlePageClick(currentPage > 1 ? currentPage - 1 : 1)
                }
              >
                <span aria-hidden="true">&lt;</span>
              </Pagination.Prev>
              {[...Array(pageCount).keys()].map((page) => (
                <Pagination.Item
                  key={page + 1}
                  active={page + 1 === currentPage}
                  onClick={() => handlePageClick(page + 1)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() =>
                  handlePageClick(
                    currentPage < pageCount ? currentPage + 1 : pageCount
                  )
                }
              >
                <span aria-hidden="true">&gt;</span>
              </Pagination.Next>
            </Pagination>
          </>
        ) : (
          <p>No services match your search criteria.</p>
        )}
      </div>
    </section>
  );
};

export default Services;
