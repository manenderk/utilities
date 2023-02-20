import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pages from "../pages";

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredPages, setFilteredPages] = useState([]);

  useEffect(() => {
    let pages = Pages;
    let textToFind = searchText.toLowerCase();
    pages = pages.filter((page) => {
      if (page.title === 'Home') {
        return false;
      }
      if (searchText) {
        return page.title.toLowerCase().includes(textToFind);
      }
      return true;
    })
    setFilteredPages(pages);
  }, [searchText])
  

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {filteredPages.map((page, idx) => (
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
    </div>
  );
};

export default HomePage;
