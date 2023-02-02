import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center bg-light border p-4">
      <p className="m-5 display-3 text-danger">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="display-6">{error.statusText || error.message}</p>
    </div>
  );
}
