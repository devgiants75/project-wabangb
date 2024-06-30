/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./ContrySelect.css";

function ContrySelect() {
  return (
    <Router>
      <div className="container-imgs">
        <ul>
          <li>
            <div>
              <a href="/a">
                <img src={require("../asset/기장.jpg")} alt="" />
              </a>
              <p>기장</p>
            </div>
          </li>
          <li>
            <div>
              <a href="/b">
                <img src={require("../asset/부산.jpg")} alt="" />
              </a>
              <p>부산</p>
            </div>
          </li>
          <li>
            <div>
              <a href="/c">
                <img src={require("../asset/울산.jpg")} alt="" />
              </a>
              <p>울산</p>
            </div>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<div>Home Page1</div>} />
        <Route path="/" element={<div>Home Page2</div>} />
        <Route path="/" element={<div>Home Page3</div>} />
      </Routes>
    </Router>
  );
}

export default ContrySelect;
