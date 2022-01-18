const RepoInfo = ({ repo }) => {
  const license = repo.licenseInfo?.spdxId;
  // 4.4 or use switch case - but would be repeating code
  const licenseSpan = (
    <span
      className={
        "px-1 py-1 ms-1 d-inline-block btn btn-sm " +
        (license === "NOASSERTION" ? "btn-warning" : "btn-outline-success")
      }
      style={{ fontSize: ".6em", pointerEvents: "none" }}
    >
      {license}
    </span>
  );

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <a className="h5 mb-0 text-decoration-none" href={repo.url}>
            {repo.name}
          </a>
          <p className="small">Description: {repo.description}</p>
        </div>
        <div className="text-nowrap ms-3">
          {license && licenseSpan}
          <span
            className={
              "px-1 py-1 ms-1 d-inline-block btn btn-sm " +
              (repo.viewerSubscription === "SUBSCRIBED"
                ? "btn-success"
                : "btn-outline-secondary")
            }
            style={{ fontSize: ".6em", pointerEvents: "none" }}
          >
            {repo.viewerSubscription}
          </span>
        </div>
      </div>
    </li>
  );
};

export default RepoInfo;
