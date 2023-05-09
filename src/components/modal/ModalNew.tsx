import React, { useContext, useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { SelectedNewType } from "../../utils/interfaces/NewTypes";
import "./modalNew.scss";
import {
  CalendarSVG,
  CloseSVG,
  FavouriteSVG,
  PersonSVG,
  ShareSVG,
} from "../../assets/iconsSVG";
import { formatDate } from "../../utils/formatters";
import { ScreenContext } from "../../context/screenContext";
import { UserContext } from "../../context/userContext";

const ModalNew = (props: { selectedNewProps: SelectedNewType }) => {
  const { windowSize, setShowToast, setToastProps } = useContext(ScreenContext);
  const { user } = useContext(UserContext);
  const { name, image, content, createdAt, creator, closeModal } =
    props.selectedNewProps;

  const [iconSize, setIconSize] = useState("");
  const [actionIconSize, setActionIconSize] = useState(0);

  const ref: any = useRef();
  useOnClickOutside(ref, closeModal);

  useEffect(() => {
    if (windowSize[0] <= 200) {
      setActionIconSize(0.8);
    }
    if (windowSize[0] > 250 && windowSize[0] <= 400) {
      setIconSize("1.5rem");
      setActionIconSize(1.2);
    }
    if (windowSize[0] > 400 && windowSize[0] <= 1200) {
      setIconSize("2.1rem");
      setActionIconSize(1.9);
    }
    if (windowSize[0] > 1200) {
      setIconSize("3rem");
      setActionIconSize(2.5);
    }
  }, [windowSize]);

  const setFavourite = () => {
    setToastProps(() => ({
      title: null,
      description: "You liked this post!",
      type: "info",
      closeToast: () => {
        setShowToast(false);
      },
    }));
    setShowToast(true);
  };

  return (
    <div className="modal-new-container" ref={ref}>
      <div className="modal-new-container__actions">
        <FavouriteSVG
          width={actionIconSize + "rem"}
          height={actionIconSize + "rem"}
          onClickFunction={setFavourite}
        />
        <ShareSVG
          width={actionIconSize * 0.8 + "rem"}
          height={actionIconSize * 0.8 + "rem"}
          mailInfo={`mailto:email@example.com?subject=${user.userName
            } has shared a news with you&body=Name: ${name}%0D%0AContent: ${content}%0D%0ACreated By: ${creator}%0D%0ACreated At: ${formatDate(
              createdAt,
              true
            )}%0D%0A%0D%0APlease, visit out News Site for more information :)%0D%0A%0D%0A`}
        />
        <CloseSVG
          width={actionIconSize * 1.2 + "rem"}
          height={actionIconSize * 1.2 + "rem"}
          onClickFunction={() => closeModal()}
        />
      </div>
      <div className="modal-new-container__info">
        <img
          className="modal-new-container__info__pic"
          src={image ? image : require("../../assets/noPhoto.png")}
          alt="Card illustration"
        />
        <div className="modal-new-container__info__texts">
          <p className="modal-new-container__info__texts__title">{name}</p>
          <p className="modal-new-container__info__texts__content">{content}</p>
          <div className="modal-new-container__info__texts__bottom-data">
            <div className="modal-new-container__info__texts__bottom-data-half">
              <PersonSVG width={iconSize} height={iconSize} />
              <p className="modal-new-container__info__texts__bottom-data-half__creator">
                {creator}
              </p>
            </div>
            <div className="modal-new-container__info__texts__bottom-data-half">
              <CalendarSVG width={iconSize} height={iconSize} />
              <p className="modal-new-container__info__texts__bottom-data-half__date">
                {formatDate(createdAt, true)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNew;
