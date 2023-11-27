import React from "react";
import { CardPairing, Footer, Header, Loading } from "../../components";
import { PAIRING_DATA } from "resources/snack-pairing";
import { Link } from "react-router-dom";

const PairingList = () => {
  const paired_snacks = PAIRING_DATA;

  return (
    <>
      <Loading />
      <div className="page-wraper">
        <Header />

        {/* Banner Area */}
        <div className="aon-page-benner-area2">
          <div className="aon-page-banner-row2">
            <div className="aon-page-benner-overlay2"></div>
            <div className="sf-banner-heading-wrap2">
              <div className="sf-banner-heading-area2">
                <div className="sf-banner-breadcrumbs-nav2">
                  <ul className="list-inline">
                    <li>
                      <Link reloadDocument to="/">
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li>Pairing</li>
                  </ul>
                </div>
                <div className="sf-banner-heading-large2">Snack Pairing</div>
              </div>
              <div className="sf-banner-vid-section">
                <div className="video-play-btn2">
                  <a
                    className="mfp-video"
                    href="https://www.youtube.com/watch?v=0BuMBWGyERA"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <span>
                    Watch Now <br /> Products Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Area End */}

        {/* Shop Wrap */}
        <div className="aon-shop-wrap">
          <div className="site-top-line" />
          <div className="container">
            <div className="product-listing-area">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  {/* Filter */}
                  <div className="product-filter-wrap d-flex justify-content-between align-items-center">
                    <div className="product-filter-left d-flex">
                      <button className="shop-list-btn m-r10">
                        <i className="feather-list"></i>
                      </button>
                    </div>
                    <div className="product-filter-right d-flex align-items-center">
                      <span className="woocommerce-result-count">
                        <span>{paired_snacks.length}</span> Pairing Available.
                      </span>
                      <div className="aon-pro-search aon-pro-search2">
                        <input
                          className="form-control sf-form-control"
                          name="company_name"
                          type="text"
                          placeholder="Search"
                        />
                        <button className="pro-search-btn">
                          <i className="fs-input-icon feather-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End of Filter */}

                  {/* Pairing Card */}
                  {paired_snacks.map((value, index) => {
                    return (
                      <CardPairing
                        key={value.id}
                        name={value.name}
                        shortDesc={value.short_description}
                        image={value.image}
                        rating={value.rating}
                        uuid={value.uuid}
                      />
                    );
                  })}
                  {/* End of Pairing Card */}
                  <div className="aon-paging-control">
                    <div className="site-pagination2">
                      <ul className="pagination">
                        <li className="page-item active">
                          <Link className="page-link" to="/pairing">
                            01
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="aon-paging-arrow">
                      <div className="aon-paging-arrow-inner">
                        <button type="button">
                          <i className="flaticon-left-arrow"></i>
                        </button>
                        <button type="button">
                          <i className="flaticon-right-arrows"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Shop Wrap */}

        <Footer />
      </div>
    </>
  );
};

export default PairingList;
