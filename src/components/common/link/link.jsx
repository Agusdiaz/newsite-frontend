import "./link.scss";

const Link = ({ name, url }) => {
  return (
    <a href={url} className="customLink">
      {name}
    </a>
  );
};

export default Link;
