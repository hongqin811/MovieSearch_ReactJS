import ClapperboardFillIcon from "remixicon-react/ClapperboardFillIcon";

const Navbar = () => {
  const handleOnClick = () => window.location.reload();
  return (
    <nav className="bg-primary d-flex p-2" onClick={handleOnClick}>
      <button className="bg-primary text-light d-flex p-2 border-0">
        <h1>
          <ClapperboardFillIcon size={42} />
        </h1>
        <div className="container-fluid" onClick={handleOnClick}>
          <h1>Movie Search</h1>
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
