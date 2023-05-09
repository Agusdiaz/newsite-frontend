import React, { useContext, useEffect, useState } from "react";
import { RefreshAnimation } from "../../assets/iconAnimations";
import { EmptySearchSVG } from "../../assets/iconsSVG";
import Card from "../../components/card/Card";
import SearchBar from "../../components/common/searchBar/SearchBar";
import { ScreenContext } from "../../context/screenContext";
import { getNews } from "../../services/news/newsService";
import { ModalError } from "../../utils//interfaces/ModalTypes";
import { NewType } from "../../utils/interfaces/NewTypes";
import "./news.scss";

const News = () => {
  const [news, setNews] = useState<Array<NewType>>(null);
  const [matchedNews, setMatchedNews] = useState<Array<NewType>>([]);
  const [searchText, setSearchText] = useState("");

  const { setShowLoader, setShowModal, setModalProps, windowSize } =
    useContext(ScreenContext);

  useEffect(() => {
    searchNewsByTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

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
      } else
        setNews(
          response.data.sort(function (a, b) {
            return (
              new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
            );
          })
        );
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
      } else
        setNews(
          response.data.sort(function (a, b) {
            return (
              new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
            );
          })
        );
    });
  };

  const searchNewsByTitle = () => {
    if (searchText.length > 0) {
      var searched = [];
      news.forEach((el) => {
        if (el.name.toLowerCase().includes(searchText.toLowerCase()))
          searched.push(el);
      });
      setMatchedNews(() => searched);
    } else setMatchedNews([]);
  };

  return (
    <div className="news-container-all">
      <div className="news-top">
        <SearchBar
          searchProps={{
            placeholder: "Search news by title...",
            onClickFunction: () => searchNewsByTitle(),
            handleInput: setSearchText,
          }}
        />
        <div className="news-top__refresh">
          <RefreshAnimation
            width={windowSize[0] > 400 ? "3rem" : "2rem"}
            height={windowSize[0] > 400 ? "3rem" : "2rem"}
            onClickFunction={() => handleRefresh()}
          />
        </div>
      </div>
      <div className="news-container">
        {news === null || news.length === 0 ? (
          <div className="empty-news">
            <img
              className="empty-news__pic"
              src={require(`../../assets/images/emptyBox.png`)}
              alt={"No news posted"}
            />
            <p className="empty-news__title">
              Right now there are no news posted. You can try updating in a
              while.
            </p>
          </div>
        ) : searchText.length > 0 && matchedNews.length > 0 ? (
          <div className="news-container__slider">
            {matchedNews.map((el, index) => {
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
        ) : searchText.length > 0 && matchedNews.length === 0 ? (
          <div className="not-matched-news">
            <EmptySearchSVG
              width={windowSize[0] > 400 ? "8rem" : "4rem"}
              height={windowSize[0] > 400 ? "8rem" : "4rem"}
            />
            <p className="not-matched-news__title">
              Sorry! There is no news with that title.
            </p>
          </div>
        ) : (
          <div className="news-container__slider">
            {news.map((el, index) => {
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
  );
};

export default News;
