import { useState } from "react";

interface Props {
  onSearch: (searchMovie: string) => void;
}

const Searchform = ({ onSearch }: Props) => {
  const [searchMovie, setsearchMovie] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsearchMovie(event.target.value);
  };

  //update user's input only when they click submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchMovie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mg-3 py-5 px-5 bg-dark ">
        <input
          type="text"
          className="form-control"
          value={searchMovie}
          onChange={handleInputChange}
          placeholder="Enter movie name for search, or nothing to see popular movies"
        />
        <button className="btn btn-primary" type="submit">
          <a className="text-light fs-4 text-decoration-none">Search</a>
        </button>
      </div>
    </form>
  );
};

export default Searchform;
