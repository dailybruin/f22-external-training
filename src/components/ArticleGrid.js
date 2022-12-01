import React from "react";
import "./ArticleGrid.css";
import LeftDivider from "../images/Leftdivider.svg";
import RightDivider from "../images/Rightdivider.svg";

export default function ArticleGrid(props) {
  const renderArticles = props.articles?.map((item) => {
    return (
      <div className="articles">
        <div className="card-placeholder"></div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="divider">
        <img style={{ width: "20%", float: "left" }} src={LeftDivider} />
        <p>Stories</p>
        <img style={{ width: "20%", float: "right" }} src={RightDivider} />
      </div>
      <div className="grid-container">
        <div className="grid">{renderArticles}</div>
      </div>
    </div>
  );
}
