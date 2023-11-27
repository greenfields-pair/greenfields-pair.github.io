import React, { useCallback, useEffect, useState } from "react";
import { Footer, Header, Loading } from "components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PAIRING_DATA } from "resources/snack-pairing";

const PairingDetail = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const getDetail = useCallback(() => {
    const filteredItem = PAIRING_DATA.filter((value) => value.uuid === id);

    if (filteredItem.length > 0) {
      setDetail(filteredItem[0]);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      getDetail();
    }
  }, [id, getDetail]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setTimeoutId(timeout);

    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      } 
    }
  }, []);

  if ("id" in detail) {
    const ratingItems = [];

    for (let index = 0; index < 5; index++) {
      ratingItems.push(
        <i
          key={index}
          className={`fa fa-star`}
          style={{ color: index > detail.rating - 1 ? "gray" : "" }}
        ></i>
      );
    }

    return (
      <>
        {isLoading && <Loading />}
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
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link reloadDocument to="/pairing">
                          Pairing
                        </Link>
                      </li>
                      <li>{detail.name}</li>
                    </ul>
                  </div>
                  <div className="sf-banner-heading-large2">{detail.name}</div>
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

          {/* SECTION CONTENT START  */}
          <div className="aon-innerpage-area mb-5">
            <div className="site-top-line"></div>

            {/* PRODUCT DETAILS  */}
            <div className="container">
              <div className="row m-b30">
                <div className="col-lg-5 col-md-5 m-b30">
                  <div className="aon-pro-full-media">
                    <img src={detail.image} alt="detail-pairing" />
                  </div>
                </div>

                <div className="col-lg-7 col-md-7">
                  <div className="single-product-area">
                    <h3 className="single-product-title">{detail.name}</h3>
                    <div className="single-product-pricearea">
                      <div className="single-product-rating">
                        <span className="rating-bx2">{ratingItems}</span>
                        <span>(Self-rating)</span>
                      </div>
                    </div>

                    <div className="single-product-text">
                      <p>{detail.description}</p>
                    </div>
                    <div className="aon-list-check-style2">
                      <ul>
                        <li>
                          <i className="feather-check"></i>Enriching Lives
                          Naturally
                        </li>
                        <li>
                          <i className="feather-check"></i>Elevated Quality Raw
                          Milk
                        </li>
                        <li>
                          <i className="feather-check"></i>100% Organic Goodness
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail SECTION START  */}
              <div className="aon-farm-tabs">
                <ul
                  className="nav nav-pills mb-3 aon-custom-nav aon-doctor-tabs"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link active"
                      data-bs-toggle="pill"
                      data-bs-target="#experience-tabs"
                      role="tab"
                      aria-selected="true"
                    >
                      <h5 className="tb-title">Enjoyment Guide</h5>
                    </div>
                  </li>
                  <li className="nav-item" role="presentation">
                    <div
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#locationstabs"
                      role="tab"
                      aria-selected="false"
                    >
                      <h5 className="tb-title">Conclusion</h5>
                    </div>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="experience-tabs"
                    role="tabpanel"
                  >
                    <div className="aon-tab-inner">
                      <div dangerouslySetInnerHTML={{__html :detail.enjoyment_guide}} /> 
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade"
                    id="locationstabs"
                    role="tabpanel">
                    <div className="aon-tab-inner">
                      <div dangerouslySetInnerHTML={{__html :detail.conclusion}} /> 
                    </div>
                  </div>
                </div>
              </div>
              {/* Detail SECTION END   */}
            </div>
            {/* PRODUCT DETAILS      */}
          </div>
          {/* CONTENT CONTENT END  */}

          <Footer />
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default PairingDetail;
