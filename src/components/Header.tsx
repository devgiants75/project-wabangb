import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "..styles/header.css";
import "..styles/reset.css";
import Main_Search from "./MainSearch";

export default function Header() {
  return (
    <div>
      <div className="bar-container">
        <ul>
          <li>
            <Link to={"./loginpage"} className="loginbtn">
              로그인
            </Link>
          </li>
          <li>
            <Link to={"./membership"} className="membership">
              회원가입
            </Link>
          </li>
          <li>
            <Link to={"./mypage"} className="mypage">
              마이페이지
            </Link>
          </li>
        </ul>
        <div className="Logo-container">
          <Logo />
        </div>
      </div>
      <Main_Search />
    </div>
  );
}
