import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import formatDate from "../../utils/formatDate";
import "./profile.scss";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="profile-container__info">
        <img
          className="profile-container__info__avatar"
          src={user.userAvatar}
          alt="Profile avatar"
        />
        <div className="profile-container__info__data">
          <p className="profile-container__info__data__name">{user.userName}</p>
          <p className="profile-container__info__data__email">
            {user.userEmail}
          </p>
          <p className="profile-container__info__data__birthdate">
            🎂 {formatDate(user.userBirthdate)}
          </p>
          <p className="profile-container__info__data__country">
            🌎 {user.userCountry}
          </p>
          <p className="profile-container__info__data__skills">Skills:</p>
          <div className="profile-container__info__data__skills-container">
            {user.userSkills.split(",").map((el, i) => (
              <span className="skill-badge" key={i}>
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
