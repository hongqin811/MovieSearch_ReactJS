import { useEffect, useState } from "react";
import Searchform from "./Searchform";
import Searchresult from "./Searchresult";
import SelectPage from "./SelectPage";

const api_key = "&api_key=85531061c766f2e96aa51d612441a2e7";
const URL = "https://api.themoviedb.org/3/search/movie?query=";

const Search = () => {
  //store the movie name which user wanna search on
  const [targetSearch, setTargetSearch] = useState<String>("");

  //List of result from API call
  const [results, setResults] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  //movie's overview will be shown based on user selected index/movie
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //fetch API when user submit the search form
  const handleSearch = (searchMovie: string) => {
    setTargetSearch(searchMovie);
    setPageNumber(1);
    setSelectedIndex(-1);
  };

  const handleOnPage = (i: number) => {
    setPageNumber(i);
    setSelectedIndex(-1);
  };

  useEffect(() => {
    //if user enters nothing, a list of popular movies will be rendered
    let currentURL = "";
    if (targetSearch.trim() == "") {
      currentURL =
        "https://api.themoviedb.org/3/movie/now_playing?&page=" +
        pageNumber.toString() +
        "&api_key=85531061c766f2e96aa51d612441a2e7";
    } else {
      currentURL =
        URL + targetSearch + api_key + "&page=" + pageNumber.toString();
    }

    fetch(currentURL)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setTotalPage(data.total_pages);
      });
  }, [targetSearch, pageNumber]);
  return (
    <>
      <Searchform onSearch={handleSearch} />
      <Searchresult
        results={results}
        changeIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <SelectPage
        page={pageNumber}
        onPage={handleOnPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default Search;
