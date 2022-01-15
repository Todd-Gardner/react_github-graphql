import { useEffect, useState } from "react";
import RepoInfo from "./components/RepoInfo";
import github from "./db";
import { githubQuery, githubSearchQuery as searchQuery } from "./Query";

function App() {
  // better to just save as user {} in one state ?
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]); //null
  const [searchString, setSearchString] = useState("react");
  const [pageCount, setPageCount] = useState(20);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(searchQuery(searchString, pageCount)),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        const viewer = data.data.viewer;
        const repositories = data.data.search.nodes;
        const total = data.data.search.repositoryCount;
        setUserName(viewer.name);
        setRepoList(repositories);
        setTotalCount(total);
      })
      .catch((err) => console.error(err));
  }, [pageCount, searchString]);

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill" />
        Repos
      </h1>
      <p>Welcome {userName}</p>
      <p>
        <b>Searching for:</b> {searchString} | <b>Items per page:</b>{" "}
        {pageCount} | <b>Total results:</b> {totalCount}
      </p>
      {repoList && (
        <ul className="list-group list-group-flush">
          {repoList.map((repo) => (
            <RepoInfo repo={repo} key={repo.id.toString()} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
