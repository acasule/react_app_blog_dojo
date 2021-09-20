import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>The page not found</p>
      <Link to="/">Return to Home page</Link>
    </div>
  );
};

export default NotFound;
