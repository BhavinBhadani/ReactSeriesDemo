import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="seriesPic" className="card__img" />
          <div className="card__info">
            <span className="class__category"> {props.title} </span>
            <h3 className="card__title"> {props.series} </h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
