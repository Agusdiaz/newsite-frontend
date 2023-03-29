import React, { useContext, useEffect, useState } from "react";
import { RefreshAnimation } from "../../assets/iconAnimations";
import Card from "../../components/card/Card";
import { ScreenContext } from "../../context/screenContext";
import { getNews } from "../../services/news/newsService";
import { ModalError } from "../../utils//interfaces/ModalTypes";
import { NewType } from "../../utils/interfaces/NewTypes";
import "./news.scss";

const News = () => {
  const [news, setNews] = useState<Array<NewType>>(null);

  const { setShowLoader, setShowModal, setModalProps, windowSize } =
    useContext(ScreenContext);

  useEffect(() => {
    setShowLoader(true);
    getNews().then((response) => {
      setShowLoader(false);
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
      } else setNews(response.data);
    });
  }, [setShowLoader, setModalProps, setShowModal]);

  const handleRefresh = () => {
    setShowLoader(true);
    getNews(true).then((response) => {
      setShowLoader(false);
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
      } else setNews(response.data);
    });
  };

  return (
    <div className="news-container-all">
      <div className="news-refresh">
        <RefreshAnimation
          width={windowSize[0] > 400 ? "3rem" : "2rem"}
          height={windowSize[0] > 400 ? "3rem" : "2rem"}
          onClickFunction={() => handleRefresh()}
        />
      </div>
      <div className="news-container">
        {news === null || news.length === 0 ? (
          <div className="empty-news">
            <img
              className="empty-news__pic"
              src={require(`../../assets/emptyBox.png`)}
              alt={"No news posted"}
            />
            <p className="empty-news__title">
              Right now there are no news posted. You can try updating in a
              while.
            </p>
          </div>
        ) : (
          <div className="news-container__slider">
            {news.map((el) => {
              return (
                <Card
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
  );
};

export default News;
