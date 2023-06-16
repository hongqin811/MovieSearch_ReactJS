import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Heart3LineIcon from "remixicon-react/Heart3LineIcon";

interface Props {
  result: {};
  index: number;
  selectedIndex: number;
  onIndex: (i: number) => void;
}
const movieCard = ({ result, index, selectedIndex, onIndex }: Props) => {
  const handleOnClick = (e) => {
    onIndex(index);
  };

  return (
    <>
      <div
        className={
          selectedIndex === index
            ? "btn card m-1 pt-2  bg-light card-hover"
            : "btn card m-1 pt-2  bg-light"
        }
        style={{ width: "14rem" }}
        onClick={handleOnClick}
      >
        <img
          src={
            result.poster_path !== null
              ? "https://image.tmdb.org/t/p/w500" + result.poster_path
              : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
          }
          className="card-img-top rounded"
          style={{ height: "20rem", width: "auto" }}
        />
        <div className="text-hover text-dark">{result.overview}</div>

        <div className="card-body text-center">
          <h6 style={{ height: "5rem" }}>{result.title}</h6>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              <Heart3LineIcon style={{ color: "red" }} />{" "}
              {result.vote_average.toFixed(1)}
            </p>
            <p className="card-text">{result.release_date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default movieCard;
