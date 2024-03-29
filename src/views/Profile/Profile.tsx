import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { formatDate, formatNumber } from "../../utils/formatters";
import Card from "../../components/card/Card";
import { NewType } from "../../utils/interfaces/NewTypes";
import { ScreenContext } from "../../context/screenContext";
import { getNews } from "../../services/news/newsService";
import { ModalError } from "../../utils/interfaces/ModalTypes";
import CardSkeleton from "../../components/skeletons/CardSkeleton";
import "./profile.scss";

const Profile = () => {
  const { user } = useContext(UserContext);
  const { setShowModal, setModalProps } = useContext(ScreenContext);
  const [isLoading, setIsLoading] = useState(false);

  const [news, setNews] = useState<Array<NewType>>(null);

  useEffect(() => {
    setIsLoading(true);
    getNews().then((response) => {
      setIsLoading(false);
      if (response.error) {
        setShowModal(true);
        setModalProps(() => ({
          ...ModalError,
          firstButtonObject: {
            ...ModalError.firstButtonObject,
            onClickFunction: () => {
              setShowModal(false);
            },
          },
          closeModal: () => {
            setShowModal(false);
          },
        }));
      } else {
        let userNews = [];
        userNews = response.data.filter((el) => {
          return el.creator === user.userEmail;
        });
        setNews(
          userNews.sort(function (a, b) {
            return (
              new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
            );
          })
        );
      }
    });
  }, [setModalProps, setShowModal, user.userEmail]);

  const showSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i <= 1; i++) {
      skeletons.push(<CardSkeleton key={i} />);
    }
    return skeletons;
  };

  return (
    <div className="profile-container">
      <div className="profile-container__card">
        <div className="profile-container__card__images">
          <div className="profile-container__card__images__background"></div>
          <img
            className="profile-container__card__images__avatar"
            src={
              user.userAvatar
                ? user.userAvatar
                : require("../../assets/images/noPhoto.png")
            }
            alt="Profile avatar"
          />
        </div>
        <div className="profile-container__card__info">
          <p className="profile-container__card__info__name">{user.userName}</p>
          <p className="profile-container__card__info__email">
            {user.userEmail}
          </p>
          <div className="profile-container__card__info__line"></div>
          <div className="profile-container__card__info__other">
            <p className="profile-container__info__other__birthdate">
              🎂 {formatDate(user.userBirthdate)}
            </p>
            <p className="profile-container__info__other__country">
              🌎 {user.userCountry}
            </p>
            <p className="profile-container__info__other__posts">
              <b>{news?.length > 0 ? formatNumber(news.length) : 0}</b>
              <br />
              posts
            </p>
          </div>
        </div>
      </div>
      <div className="profile-container__news">
        <p className="profile-container__news__header">
          Here are the news you posted:
        </p>
        <div className="profile-container__news__holder">
          {!isLoading && (news === null || news.length === 0) ? (
            <div className="profile-container__news__holder__empty-news">
              <img
                className="profile-container__news__holder__empty-news__pic"
                src={require(`../../assets/images/emptyBox.png`)}
                alt={"No news posted"}
              />
              <p className="profile-container__news__holder__empty-news__title">
                You haven't posted anything yet.
              </p>
            </div>
          ) : (
            <div className="profile-container__news__holder__slider">
              {isLoading
                ? showSkeletons()
                : news.map((el, index) => {
                    return (
                      <Card
                        key={index}
                        cardProps={{
                          id: el.id,
                          name: el.name,
                          content: el.content,
                          createdAt: el.createdAt,
                          creator: el.creator,
                          image: el.image,
                        }}
                      />
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
