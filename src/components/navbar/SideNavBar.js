import React from "react";
import { Link } from "react-router-dom";

export default function SideNavBar({ isSideNavBarClose, closeAction }) {
  return (
    <>
      <style>
        {`
                    #sidebar {
                        width: 230px;
                        position: fixed;
                        padding: 30px 20px;
                        top: 0;
                        left: 0;
                        height: 100vh;
                        z-index: 999;
                        background: #4fa1d9;
                        color: #fff;
                        transition: all 0.3s;
                        font-weight : 700
                    }

                    nav#sidebar li {
                        margin-bottom: 5px;
                    }

                    #sidebar a {
                        color: #ffff;
                        font-size: 13px;
                    }

                    #sidebar a:hover {
                        color: #d3d3d3;
                        font-size: 14px;
                        text-decoration: none;
                    }
                    #sidebar .cross {
                        position: absolute;
                        right: 15px;
                        top: 15px;
                    }

                    .closeSideNavBar {
                        display:none;
                        transition: visibility 0s, opacity 0.5s linear;
                    }
                `}
      </style>
      <nav id="sidebar" className={isSideNavBarClose && "closeSideNavBar"}>
        <i className="fas fa-times cross" onClick={() => closeAction()}></i>
        <ul className="list-unstyled components">
          <li>
            <Link to="/" onClick={() => closeAction()}>
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/product/package/all" onClick={() => closeAction()}>
              <i className="fa fa-cube"></i> Packages
            </Link>
          </li>
          <li>
            <Link to="/product/channels/all" onClick={() => closeAction()}>
              <i className="fa fa-stream"></i> Channels
            </Link>
          </li>
          <li>
            <Link to="/product/ondemand/all/#2" onClick={() => closeAction()}>
              <i className="fa fa-caret-square-right"></i> On Demand Contents
            </Link>
          </li>
          <li>
            <a href="/product/svod/all" onClick={() => closeAction()}>
              <i className="fa fa-caret-square-right"></i> SVOD
            </a>
          </li>
          {localStorage.jwt ? (
            <li>
              <a href="/product/databundles/all" onClick={() => closeAction()}>
                <i className="fa fa-caret-square-right"></i> Data Bundles
              </a>
            </li>
          ) : (
              ""
            )}
          {localStorage.jwt ? (
            <li>
              <a href="/product/screens/all" onClick={() => closeAction()}>
                <i className="fa fa-caret-square-right"></i> Screens
              </a>
            </li>
          ) : (
              ""
            )}
          {/* <li>
            <a href="#">
              <i className="fa fa-th-list"></i> Other Products
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
