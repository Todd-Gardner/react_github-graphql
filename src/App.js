import { useEffect, useState } from "react";
import RepoInfo from "./components/RepoInfo";
import github from "./db";
import { githubQuery, githubSearchQuery as searchQuery } from "./Query";

function App() {
  // better to just save as user {} in one state ?
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]); //null

  useEffect(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(searchQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        const viewer = data.data.viewer;
        const repositories = data.data.search.nodes;
        setUserName(viewer.name);
        setRepoList(repositories); //viewer.repositories.nodes
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill" />
        Repos
      </h1>
      <p>Welcome {userName}</p>

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
