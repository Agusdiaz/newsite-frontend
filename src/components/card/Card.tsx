import React, { useContext } from "react";
import { ActionsSVG } from "../../assets/iconAnimations";
import { CalendarSVG, PersonSVG } from "../../assets/iconsSVG";
import { formatDate } from "../../utils/formatters";
import { NewType } from "../../utils/interfaces/NewTypes";
import TooltipActions from "../tooltip/TooltipActions";
import "./card.scss";
import { ScreenContext } from "../../context/screenContext";
import { UserContext } from "../../context/userContext";

const Card = (props: { cardProps: NewType }) => {
  const { setShowModalNew, setSelectedNewProps } = useContext(ScreenContext);
  const { user } = useContext(UserContext);

  const { id, name, content, createdAt, creator, image } = props.cardProps;

  const openNew = () => {
    setSelectedNewProps(() => ({
      id,
      createdAt,
      name,
      content,
      image,
      creator,
      closeModal: () => {
        setShowModalNew(false);
      },
    }));
    setShowModalNew(true);
  };

  return (
    <div className="card-container" key={id} tabIndex={0}>
      <div className="card-container__actions">
        <TooltipActions
          openNew={openNew}
          mailInfo={`mailto:email@example.com?subject=${
            user.userName
          } has shared a news with you&body=Name: ${name}%0D%0AContent: ${content}%0D%0ACreated By: ${creator}%0D%0ACreated At: ${formatDate(
            createdAt,
            true
          )}%0D%0A%0D%0APlease, visit out News Site for more information :)%0D%0A%0D%0A`}
        >
          <ActionsSVG />
        </TooltipActions>
      </div>
      <img
        className="card-container__pic"
        src={image ? image : require("../../assets/images/noPhoto.png")}
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
