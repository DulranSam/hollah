import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Seems to be an unknown page</h1>
      <Link to="/">Click Here to go back Home!</Link>
    </div>
  );
};

export default NotFound;
