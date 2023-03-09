import "./buttonEmpty.scss";

const ButtonEmpty = ({ title, onClickFunction, isDisabled }) => {
  return (
    <button
      className="emptyButton"
      onClick={onClickFunction}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default ButtonEmpty;
