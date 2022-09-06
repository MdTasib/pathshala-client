import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import icon from "../../../assets/icons/icon13.png";

const RecentNewsItem = ({ recentNewsItem }) => {
  const { short_Description, heading, date, author, tags, imageUrl } =
    recentNewsItem;
  return (
    <section>
      <div className="relative ">
        <img className="rounded-3xl" src={imageUrl} alt="" srcset="" />
        <div className="badge absolute -bottom-3 left-6 bg-yellow-400 border-yellow-400 text-black px-4 py-3">
          English
        </div>
      </div>
      <div className=" ml-4 py-6">
        <ul className="flex flex-row text-sm">
          <li className="px-2">{date}</li>
          <li className="px-2">{author}</li>
          <li className="px-2">
            <img className="inline pr-1" src={icon} alt="" />
            <span>{tags}</span>
          </li>
        </ul>
        <p className="font-medium text-xl py-2">{heading}</p>
        <p className="text-sm font-light">{short_Description}</p>
        <p className="text-blue-800 text-sm py-3">
          <span className="pr-2">Read</span>
          <FaLongArrowAltRight className="inline "></FaLongArrowAltRight>
        </p>
      </div>
    </section>
  );
};

export default RecentNewsItem;
