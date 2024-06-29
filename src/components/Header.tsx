import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./style/reset.css";
import "./style/header.css";

export default function Header() {
  return (
    <div>
      <div className="bar-container">
        <Logo />
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
      </div>
    </div>
  );
}
