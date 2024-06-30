/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import "../styles/ContrySelect.css";

function ContrySelect() {
  return (
    <div className="container-imgs">
      <div>
        <div className="slide-img">
          <ul>
            <li>
              <div>
                <a href="/a">
                  <img src={require("../assets/기장.jpg")} alt="" />
                </a>
                <p>기장</p>
              </div>
            </li>
            <li>
              <div>
                <a href="/b">
                  <img src={require("../assets/부산.jpg")} alt="" />
                </a>
                <p>부산</p>
              </div>
            </li>
            <li>
              <div>
                <a href="/c">
                  <img src={require("../assets/울산.jpg")} alt="" />
                </a>
                <p>울산</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="slide-img">
          <ul>
            <li>
              <div>
                <a href="/a">
                  <img src={require("../assets/기장.jpg")} alt="" />
                </a>
                <p>기장</p>
              </div>
            </li>
            <li>
              <div>
                <a href="/b">
                  <img src={require("../assets/부산.jpg")} alt="" />
                </a>
                <p>부산</p>
              </div>
            </li>
            <li>
              <div>
                <a href="/c">
                  <img src={require("../assets/울산.jpg")} alt="" />
                </a>
                <p>울산</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="slide-img">
          <ul>
            <li>
              <div>
                <a href="/a">
                  <img src={require("../assets/기장.jpg")} alt="" />
                </a>
                <p>기장</p>
              </div>
            </li>
            <li>
              <div>
                <a href="/b">
                  <img src={require("../assets/부산.jpg")} alt="" />
                </a>
                <p>부산</p>
              </div>
            </li>
            <li>
              <div>
                <a href="/c">
                  <img src={require("../assets/울산.jpg")} alt="" />
                </a>
                <p>울산</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContrySelect;
