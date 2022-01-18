const ProfileCard = ({ data }) => {
  return (
    <div className="card" style={{ backgroundColor: "#e9ecef" }}>
      <div className="row no-gutters">
        <div className="col-sm-3">
          <img
            className="card-img img-top"
            src={data?.viewer.avatarUrl}
            alt="Profile"
            style={{ maxHeight: "200px" }}
          />
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h4 className="card-title">{data?.viewer.name}</h4>
            <p className="small font-weight-light">@{data?.viewer.login}</p>
            <p className="small card-text">{data?.viewer.bio}</p>
            <a href={data?.viewer.url} className="btn btn-sm btn-primary">
              See Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
