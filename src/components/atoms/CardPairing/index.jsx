import React from "react";
import { Link } from "react-router-dom";

const CardPairing = ({ name, shortDesc, image, rating, uuid }) => {
  const ratingItems = [];

  for (let index = 0; index < 5; index++) {
    ratingItems.push(
      <span
        key={index}
        className={`fa fa-star ${index > rating - 1 && "text-gray"}`}
      />
    );
  }

  return (
    <Link
      className="aon-shop2-list d-flex m-b30"
      reloadDocument
      to={`/pairing/${uuid}`}
    >
      <div className="aon-shop2-pic">
        <img src={image} alt="img-card-pairing" style={{ borderRadius: 8 }} />
      </div>
      <div className="aon-shop2-info">
        <h4 className="aon-shop2-title">{name}</h4>
        <p className="aon-shop2-text">{shortDesc}</p>
        <div className="aon-shop2-bot d-flex">
          <div className="aon-shop2-botLeft d-flex">
            <div className="aon-shop2-rating">
              <div className="aon-df2-rating">{ratingItems}</div>
            </div>
          </div>
          <div className="aon-shop2-botRight d-flex">
            <button className="aon-shop2-btn" type="button">
              <i className="fa fa-info-circle"></i> More Information
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPairing;
