import { useEffect } from "react";
import { Link, useHref, useRoutes } from "react-router-dom";
import "./App.scss";
import Pages from "./pages";

function App() {
  const currentRoute = useHref();
  const routes = useRoutes(Pages);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  return (
    <div className="App dark-theme">
      {currentRoute !== "/" && (
        <Link to="/" className="btn btn-secondary px-4" id="navigate-back-btn">
          <i className="fa fa-chevron-left"></i>
        </Link>
      )}
      <div className="container py-5">
        <div className="text-center d-flex align-items-center justify-content-center">
          <h1>Utilities</h1>
        </div>
        {routes}
      </div>
    </div>
  );
}

export default App;
