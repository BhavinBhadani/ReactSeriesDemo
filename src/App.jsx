import React from "react";
import Card from "./Card";
import seriesData from "./seriesData";

const App = () => {
  return (
    <>
      <h1 className="heading_style"> List of netflix Series </h1>
      {seriesData.map((val) => {
        return (
          <Card
            key={val.id}
            title={val.title}
            imgSrc={val.imgSrc}
            series={val.series}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;
