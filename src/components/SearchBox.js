const SearchBox = ({
  searchString,
  resultCount,
  totalResults,
  onTotalChange,
  onQueryChange,
}) => {
  return (
    <div className="d-flex align-items-center my-2 px-3 py-2 rounded-3 bg-light small">
      <div className="d-flex align-items-center flex-grow-1">
        <label htmlFor="searchString" className="me-2 text-secondary fw-bold">
          Search
        </label>
        <input
          className="form-control form-control-sm me-2"
          id="searchString"
          value={searchString}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="search repositories"
        />
      </div>
      <div className="d-flex align-items-center">
        <label htmlFor="resultCount" className="me-2 text-secondary fw-bold">
          Show
        </label>
        <input
          className="form-control form-control-sm me-2 text-center"
          id="resultCount"
          // "" below ?
          type="number"
          min={1}
          max={100}
          value={resultCount}
          onChange={(e) => onTotalChange(e.target.value)}
        />
      </div>
      <label htmlFor="resultCount" className="me-2 text-secondary fw-bold">
        per page.
      </label>
      <div>
        <b className="text-secondary me-2"> | Total results:</b>
        {totalResults}
      </div>
    </div>
  );
};

export default SearchBox;
