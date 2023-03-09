import "./buttonFilled.scss";

const ButtonFilled = ({ title, onClickFunction, isDisabled }) => {
  return (
    <button
      className="filledButton"
      onClick={onClickFunction}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default ButtonFilled;
