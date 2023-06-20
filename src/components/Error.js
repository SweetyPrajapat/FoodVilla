import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { error } = err;
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong...</p>
      <h2>{err.status + " : " + err.statusText + " " + error}</h2>
    </div>
  );
};

export default Error;
