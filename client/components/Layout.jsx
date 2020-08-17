import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import HomeLogo from "./HomeLogo";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";

const Layout = ({ children }) => {
  const Head = () => (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
    </>
  );

  const navBar = () => (
    <ul className="nav customNav nav-tabs">
      <li className="nav-item">
        <a className="homeLink" href="/">
          <HomeLogo />
        </a>
      </li>
      <div className="login__menu">
        <li className="nav-item">
          <a className="login__menu-item" href="/login">
            <AiOutlineLogin size={35} />
          </a>
        </li>
        <li className="nav-item">
          <a className="login__menu-item" href="/register">
            <FiUserPlus size={35} />
          </a>
        </li>
      </div>
    </ul>
  );
  return (
    <>
      {Head()}
      {navBar()}
      <div className="container customContainer pt-5 pb-5">{children}</div>
    </>
  );
};

export default Layout;
