import React from "react";
import ico from "../../../../assets/images/ico.png"
import cart from "../../../../assets/images/icon10.png"

const SingleCardClass = ({ img1 }) => {
  return (
    <div className="h-[400px] w-[300px] mx-5 rounded-lg">
      <img
        style={{ height: "180px",width:"300px"}}
        className="rounded-t-lg"
        
        src={img1}
        alt=""
      />
      <div className="relative">
        <a href="/" title="" class="crt-btn flex items-center justify-center">
          <img src={cart}  alt="" />
        </a>
      </div>
      <div class="classes-col">
        
        <div class="class-info">
          <h3 className="text-lg font-bold">
            <a href="class-single.html" title="">
              Environmental Studies &amp; Earth Sciences
            </a>
          </h3>
          <span>Mon-Fri</span> <span>10 AM - 12 AM</span>
          <div class="flex flex-wrap justify-between items-center">
            <div className="flex posted-by items-center">
              <img src={ico}  alt="" />{" "}
              <a href="/" title="">
                Margje Jutten
              </a>
            </div>
            <strong class="price">$89</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardClass;
