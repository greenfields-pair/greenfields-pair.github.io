import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer footer-gradient">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sf-site-link sf-widget-link f-margin">
                <div className="aon-footer-logo">
                  <img src="images/GreenfieldsLogoWhite.svg" alt="" />
                </div>
                <div className="aon-footer-text">
                  Where Milk Meets Bold Adventures!
                </div>
                <ul className="aon-footer-coinfo">
                  <li>
                    <i className="feather-phone-call"></i> 0851 7210 0967
                  </li>
                  <li>
                    <i className="feather-mail"></i> consumerfeedback
                    <br />
                    @greenfieldsdairy.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="aon-site-link aon-widget-link f-margin">
                <h4 className="aon-f-title">Menu</h4>
                <ul className="aon-widget-foo-list">
                  <li>
                    <Link reloadDocument to="/">
                      Home
                    </Link>
                  </li>
                  <li>
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
                  <li>
                    <a
                      href="https://greenfieldsdairy.com/faq"
                      target="_blank"
                      rel="noreferrer"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://greenfieldsdairy.com/fun-fact"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Fun Facts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://greenfieldsdairy.com/distribusi-dan-kontak"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Distributions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="sf-widget-newsletter f-margin">
                <h4 className="aon-f-title">Our Sosial Media</h4>
                <ul className="aon-socila-icon d-flex">
                  <li>
                    <a
                      href="https://www.instagram.com/greenfields.id"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/greenfieldsdairygroup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/greenfieldsdairygroup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/greenfieldsdairygroup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/greenfieldsdairygroup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="feather-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="aon-footer-bottom-area">
            <div className="aon-foo-copyright">
              © Copyright 2023 <span> yusuf fahrizal </span> - All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>

      <div className="footer-overlay"></div>

      <div className="footer-patter"></div>
    </footer>
  );
};

export default Footer;
