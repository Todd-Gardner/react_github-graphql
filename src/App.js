import { useEffect, useState } from "react";
import RepoInfo from "./components/RepoInfo";
import SearchBox from "./components/SearchBox";
import github from "./db";
import { githubQuery, githubSearchQuery as searchQuery } from "./Query";

function App() {
  // better to just save as user {} in one state ?
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [pageCount, setPageCount] = useState(10); //change to resultCount
  const [totalCount, setTotalCount] = useState(0); //change to totalResults

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
      <SearchBox
        searchString={searchString}
        pageCount={pageCount}
        totalCount={totalCount}
        onQueryChange={(searchString) => setSearchString(searchString)}
        onTotalChange={(total) => setPageCount(total)}
      />
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
