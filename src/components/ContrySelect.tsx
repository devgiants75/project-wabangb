/** @jsxImportSource @emotion/react */
import "../styles/ContrySelect.css";

function ContrySelect() {
  return (
    <div className="container-imgs">
        <div className="slide-img">
          <ul>
            <li>
              <div className="slide-con">
                <a className="slide-a" href="/a">
                  <img src={require("../assets/기장.jpg")} alt="" />
                </a>
                <p>기장</p>
              </div>
            </li>
            <li>
              <div className="slide-con">
                <a className="slide-a" href="/b">
                  <img src={require("../assets/부산.jpg")} alt="" />
                </a>
                <p>부산</p>
              </div>
            </li>
            <li>
              <div className="slide-con">
                <a className="slide-a" href="/c">
                  <img src={require("../assets/울산.jpg")} alt="" />
                </a>
                <p>울산</p>
              </div>
            </li>
          </ul>


        </div>
      </div>
  );
}

export default ContrySelect;
