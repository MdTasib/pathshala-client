import React from "react";
import "../../../assets/styles/Banner.css";
import bannerImage from "../../../assets/images/banner-img-for-groupProject.png";

const Banner = () => {
  return (
    <div className="flex banner-container">
      <div>
        <div className="mt-16">
          <h1 className="text-6xl font-semibold  banner-text ">
            The Smarter Way
          </h1>
          <h1 className="text-6xl font-semibold banner-textm mt-2">
            to Learn{" "}
            <span className="text-orange-500 border-orange-500 border-b-2 pb-0">
              Anything
            </span>
          </h1>
        </div>
        <p className="text-sm  my-10 w-2/3">
          Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus
          turpis, id mollis est rutrum nec. Sed interdum nisi id libero
          tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus,
          ullamcorper sed
        </p>
        <h1 className="banner-sm-text">Shelly</h1>
        <input
          className="input-banner pl-4"
          type="text"
          placeholder="Search Class"
        />
        <div className="round-div bg-gradient-to-b from-orange-400 to-red-500"></div>
        <div className="div-green"></div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} className="w-[800px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
