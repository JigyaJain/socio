const Header = () => {
  return (
    <header className="p-3 text-bg-dark header-container">
      <div className="d-flex flex-wrap align-items-center justify-content-end ">
        <form className=" me-lg-5" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
