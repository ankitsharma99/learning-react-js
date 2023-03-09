import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  // can also destructure": const {status, statusText, data} = useRouteError();
  // console.log(err.data);
  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
