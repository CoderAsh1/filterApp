import React from "react";
import "./card.css";
import home from "../../../Assets/home.jpg";
import { MdSquareFoot } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";

const Card = ({ data }) => {
  const { image, price, title, location, beds, bath, square } = data;
  return (
    <div className="container">
      <img src={image} alt="" />
      <div className="details">
        <p>
          <span>{price}</span>/month
        </p>
        <h3>{title}</h3>
        <h5>{location}</h5>
        <div className="desc">
          <div className="beds">
            <BiBed />
            <span>{beds} Beds</span>
          </div>
          <div className="beds">
            <BiBath />
            <span> {bath} Bathrooms</span>
          </div>
          <div className="beds">
            {" "}
            <MdSquareFoot />
            <span>
              {square} m <sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
