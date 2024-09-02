import { useRouteError } from "react-router-dom";

function PageError() {
  const error = useRouteError() as Response | Error;

  if (error instanceof Response && error.status === 404) {
    return <div>page not found</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Unknown error occurred</div>;
}
export default PageError;
