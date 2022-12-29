import { Link } from "react-router-dom";
import Pages from "../pages";

const HomePage = () => {
  return (
    <>
    <div className="row">
      <div className="d-flex align-items-center justify-content-center mb-4">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Search..."
          />
        </div>
    </div>
    <div className="row">
      {Pages.filter(page => page.title !== 'Home').map((page, idx) => (
        <div className="col-md-3" key={idx}>
          <div className="card">
            <div className="card-body">
              <Link to={page.path}>
                <h3>{page.title}</h3>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default HomePage;
