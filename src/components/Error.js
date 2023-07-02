import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { error } = err;
  console.log(err);
  return (
    <div className="text-center ">
      <div className=" bg-pink-100 w-96 ring-2 ring-purple-900 rounded-md p-2 mx-96 my-2">
        <h1 className="text-lg font-bold">Oops!</h1>
        <p>Something went wrong...</p>
        <h2 className="text-md">
          {err.status + " : " + err.statusText + " " + error}
        </h2>
      </div>
    </div>
  );
};

export default Error;
