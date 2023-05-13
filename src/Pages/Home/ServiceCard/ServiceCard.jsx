import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card border bg-base-100 shadow-xl">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="card-actions">
          <p className="text-xl font-bold text-[#FF3811]">Price : ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button>
              <FaArrowRight className="text-[#FF3811]"></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
