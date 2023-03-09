import "./input.scss";

const Input = ({ name, isRequired, type }) => {
  return (
    <p className="inputContainer">
      <label class="inputContainer__label">
        <b>{name}</b>
      </label>
      <input
        class="inputContainer__box"
        name={name}
        type={type}
        required={isRequired}
      />
    </p>
  );
};

export default Input;
