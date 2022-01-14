const RepoInfo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <a className="h5 mb-0 text-decoration-none" href={repo.url}>
            {repo.name}
          </a>
          <p className="small">Description: {repo.description}</p>
        </div>
        <span
          className={
            "px-0 py-1 ms-1 d-inline-block btn btn-sm " +
            (repo.viewerSubscription === "SUBSCRIBED"
              ? "btn-success"
              : "btn-outline-secondary")
          }
          style={{ fontSize: ".6em" }}
        >
          {repo.viewerSubscription}
        </span>
      </div>
    </li>
  );
};

export default RepoInfo;
