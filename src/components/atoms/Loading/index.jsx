import React from "react";

const Loading = () => {
  return (
    <div className="loading-area">
      <div className="loading-box"></div>
      <div className="loading-pic">
        <div id="cssload-cupcake" className="cssload-box">
          <span className="cssload-letter">L</span>
          <div className="cssload-cupcakeCircle cssload-box">
            <div className="cssload-cupcakeInner cssload-box">
              <div className="cssload-cupcakeCore cssload-box"></div>
            </div>
          </div>
          <span className="cssload-letter cssload-box">A</span>
          <span className="cssload-letter cssload-box">D</span>
          <span className="cssload-letter cssload-box">I</span>
          <span className="cssload-letter cssload-box">N</span>
          <span className="cssload-letter cssload-box">G</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
