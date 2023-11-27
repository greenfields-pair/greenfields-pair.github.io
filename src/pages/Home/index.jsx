import React, { useCallback, useEffect, useState } from "react";
import {
  CardPairing,
  Clients,
  Footer,
  Header,
  Loading,
  MainSlider,
} from "../../components";
import { PAIRING_DATA } from "resources/snack-pairing";

const Home = () => {

  const paired_snacks = PAIRING_DATA.slice(0, 3);
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

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

  return (
    <>
      {isLoading && <Loading />}
      <div className="page-wraper">
        <Header />

        <div className="page-content">
          <MainSlider />
        </div>

        {/* About */}
        <section className="aon-about-area">
          <div className="site-top-line"></div>
          <Clients />
          <div className="container">
            <div className="section-head center">
              <h2 className="aon-title aon-title-line">
                <span>Greenfields</span> Snack Pairing
              </h2>
              <p>
                Elevate your snacking with Greenfields! Pair our premium milk,
                yogurt, and cheese with your favorite treats for a taste
                symphony. Indulge in delightful combinations that transform
                snack time into a gourmet experience. Greenfields Snack Pairing:
                Elevate your bites!
              </p>
            </div>
            <div className="aon-welcome-pic animate-v">
              <img src="images/circle-pic.png" alt="" />
            </div>
          </div>
        </section>
        {/* End of About */}

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

export default Home;
