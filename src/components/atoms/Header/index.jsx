import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <header className="site-header header-style-2 mobile-sider-drawer-menu">
      <div className="sticky-header main-bar-wraper  navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix">
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <Link to="/">
                  <img src="/images/GreenfieldsLogoGreen.svg" alt="" />
                </Link>
              </div>
            </div>
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first"></span>
              <span className="icon-bar icon-bar-two"></span>
              <span className="icon-bar icon-bar-three"></span>
            </button>

            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
              <ul className=" nav navbar-nav">
                <li className={location.pathname === '/' ? "current-menu-item" : ""}>
                  <Link reloadDocument to="/">
                    Home
                  </Link>
                </li>
                <li className={location.pathname === '/pairing' ? "current-menu-item" : ""}>
                  <Link reloadDocument to="/pairing">
                    Snack Pairing
                  </Link>
                </li>
                <li>
                  <a
                    href="https://greenfieldsdairy.com/resep-lezat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Delicious Recipes
                  </a>
                </li>
                <li>
                  <a
                    href="https://greenfieldsdairy.com/produk/category"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="https://greenfieldsdairy.com/artikel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="https://greenfieldsdairy.com/tentang-greenfields"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
