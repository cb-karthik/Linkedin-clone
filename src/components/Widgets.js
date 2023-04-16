import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn hits 2M users in India", "Top news-1958 readers")}
      {newsArticle("Covid 4th wave may affect Tech industry once again", "Top news-8958 readers")}
      {newsArticle("WEB-3 Roadmap", "Top news-958 readers")}
      {newsArticle("Recession to over soon?", "Top news-11658 readers")}
      {newsArticle("Top skills for 2023", "Top news-3256 readers")}
    </div>
  );
}

export default Widgets;
