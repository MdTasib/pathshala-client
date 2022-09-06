import React, { useState } from "react";
import { recentNewsData } from "../../../Data/recentNewsData";
import RecentNewsItem from "./RecentNewsItem";

const RecentNews = () => {
  const [recentNews, setRecentNews] = useState(recentNewsData);
  return (
    <section className="py-10">
      <div className="text-center">
        <p className="font-sans text-5xl font-bold ">
          Recent <span className="text-orange-600">News</span>
        </p>
        <p className="mt-5 text-xs md:text-sm text-slate-700">
          Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra,
          bibendum justo eget, <br /> lacinia dui. Donec ligula ligula,
          elementum sit amet
        </p>
      </div>
      <div className=" mx-6 mt-9">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 ">
          {recentNews.map((recentNewsItem) => (
            <RecentNewsItem
              key={recentNewsItem.id}
              recentNewsItem={recentNewsItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
