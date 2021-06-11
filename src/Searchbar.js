import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { Button, Dropdown } from "react-bootstrap";

export default function Searchbar() {
  // set default engine and action url to be called
  const [currentEngine, setCurrentEngine] = React.useState("google");
  const [actionURL, setActionURL] = React.useState(
    "https://www.google.com/search?q="
  );

  const handleSource = (source) => {
    // set current source engine and action url based on user selection
    setCurrentEngine(source);
    setActionURL(
      `https://www.${source}.com/${source !== "duckduckgo" ? "search" : ""}?q=`
    );
  };

  const engines = {
    // map engine icons
    google: (
      <img
        src="https://img.icons8.com/color/24/000000/google-logo.png"
        alt="google-logo"
      />
    ),
    bing: (
      <img
        src="https://img.icons8.com/color/24/000000/bing.png"
        alt="bing-logo"
      />
    ),
    duckduckgo: (
      <img
        src="https://img.icons8.com/color/24/000000/duckduckgo--v1.png"
        alt="duckduckgo-logo"
      />
    ),
    ecosia: (
      <img
        src="https://img.icons8.com/color/24/000000/ecosia.png"
        alt="ecosia-logo"
      />
    )
  };

  return (
    <div>
      <div>
        <h2>Welcome to your Custom Searchbar!</h2>
      </div>
      <form method="get" action={actionURL} target="_top">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search..."
            id="q"
            name="q"
            title=""
            alt="Search Text"
            maxLength="256"
          />
          <button type="submit" id="searchsubmit">
            <span id="searchsubmiticon">
              <FiSearch />
            </span>
            <span id="searchsubmitimg">{engines[currentEngine]}</span>
          </button>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <MdArrowDropDown />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h3 className="dropdown-header">Choose your search engine</h3>
              <Dropdown.Item>
                <Button onClick={() => handleSource("google")}>
                  {engines["google"]}
                  {" Google"}
                </Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={() => handleSource("bing")}>
                  {engines["bing"]}
                  {" Bing"}
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={() => handleSource("duckduckgo")}>
                  {engines["duckduckgo"]}
                  {" DuckDuckGo"}
                </button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={() => handleSource("ecosia")}>
                  {engines["ecosia"]}
                  {" Ecosia"}
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </form>
    </div>
  );
}
