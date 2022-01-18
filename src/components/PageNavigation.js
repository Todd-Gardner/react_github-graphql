const PageNavigation = ({ start, end, previous, next, onPageChange }) => {
  return (
    <div className="d-flex justify-content-center my-2">
      {previous && (
        <button
          className="btn btn-sm mx-1 bi bi-arrow-left btn-primary"
          onClick={() => onPageChange("last", 'before: "' + start + '"')}
        >
          {" "}
          prev
        </button>
      )}
      {next && (
        <button
          className="btn btn-sm mx-1 btn-primary"
          onClick={() => onPageChange("first", 'after: "' + end + '"')}
        >
          next
          <i className="bi bi-arrow-right mx-1" />
        </button>
      )}
    </div>
  );
};

export default PageNavigation;
