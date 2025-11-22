import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1>Oops!!!</h1>
      <h1 className="status">
        {err.status}: {err.statusText}
      </h1>
      <div className="error-btn">
        <a href="/">Go Home</a>
      </div>
    </div>
  );
};
export default Error;
