import React from "react";
import "./cardSkeleton.scss";

const CardSkeleton = (key) => {
  return (
    <div className="card-skeleton-container" key={key}>
      <div className="card-skeleton-container__actions"></div>
      <div className="card-skeleton-container__pic skeleton"></div>
      <div className="card-skeleton-container__content">
        <div className="card-skeleton-container__content__title skeleton"></div>
        <div className="card-skeleton-container__content__body skeleton"></div>
        <div className="card-skeleton-container__content__bottom-data">
          <div className="card-skeleton-container__content__bottom-data-half">
            <div className="card-skeleton-container__content__creator skeleton"></div>
          </div>
          <div className="card-skeleton-container__content__bottom-data-half">
            <div className="card-skeleton-container__content__date skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
