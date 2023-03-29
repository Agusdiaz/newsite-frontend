import React from "react";
import { ActionsSVG } from "../../assets/iconAnimations";
import { CalendarSVG, PersonSVG } from "../../assets/iconsSVG";
import formatDate from "../../utils/formatDate";
import { NewType } from "../../utils/interfaces/NewTypes";
import TooltipActions from "../tooltip/TooltipActions";
import "./card.scss";

const Card = (props: { cardProps: NewType }) => {
  const { id, name, content, createdAt, creator, image } = props.cardProps;

  return (
    <div className="card-container" key={id}>
      <div className="card-container__actions">
        <TooltipActions>
          <ActionsSVG />
        </TooltipActions>
      </div>
      <img
        className="card-container__pic"
        src={image}
        alt="Card illustration"
      />
      <div className="card-container__content">
        <p className="card-container__content__title">{name}</p>
        <p className="card-container__content__body">{content}</p>
        <div className="card-container__content__bottom-data">
          <div className="card-container__content__bottom-data-half">
            <PersonSVG width={"1.5rem"} height={"1.5rem"} />
            <p className="card-container__content__creator">{creator}</p>
          </div>
          <div className="card-container__content__bottom-data-half">
            <CalendarSVG width={"1.5rem"} height={"1.5rem"} />
            <p className="card-container__content__date">
              {formatDate(createdAt, true)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
