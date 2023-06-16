import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

interface Props {
  results: any[];
  changeIndex: (num: number) => void;
  selectedIndex: number;
}

const Searchresult = ({ results, changeIndex, selectedIndex }: Props) => {
  const handleSelectedIndex = (i: number) => {
    changeIndex(i);
  };

  //hide the "no result" alert if user haven't clicked any submit button
  if (results.length <= 0) {
    return (
      <>
        <p className="bg-secondary text-light text-center p-2">
          No result can be found
        </p>
      </>
    );
  }

  // return a group of cards for result
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  d-flex justify-content-center">
        {results.map((result, index) => (
          <MovieCard
            result={result}
            index={index}
            selectedIndex={selectedIndex}
            onIndex={handleSelectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Searchresult;
