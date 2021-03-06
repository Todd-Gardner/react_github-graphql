import { useEffect, useState } from "react";
import PageNavigation from "./components/PageNavigation";
import ProfileCard from "./components/ProfileCard";
import RepoInfo from "./components/RepoInfo";
import SearchBox from "./components/SearchBox";
import github from "./db";
import { githubQuery, githubSearchQuery as searchQuery } from "./Query";

// TODO: Add name to search to be able to search for other users

function App() {
  // better to just save as user {} in one state ?
  const [data, setData] = useState();
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [resultCount, setResultCount] = useState(5);
  const [totalResults, setTotalResults] = useState(0);

  const [startCursor, setStartCursor] = useState(null);
  const [endCursor, setEndCursor] = useState(null);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [paginationKeyword, setPaginationKeyword] = useState("first");
  const [paginationString, setPaginationString] = useState("");

  useEffect(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(
        searchQuery(
          searchString,
          resultCount,
          paginationKeyword,
          paginationString
        )
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        //const data = data;
        const viewer = data.data.viewer;
        const repositories = data.data.search.edges;
        const total = data.data.search.repositoryCount;
        const start = data.data.search.pageInfo?.startCursor;
        const end = data.data.search.pageInfo?.endCursor;
        const prev = data.data.search.pageInfo?.hasPreviousPage;
        const next = data.data.search.pageInfo?.hasNextPage;

        setData(data.data);
        setUserName(viewer.name);
        setRepoList(repositories);
        setTotalResults(total);
        setStartCursor(start);
        setEndCursor(end);
        setHasPreviousPage(prev);
        setHasNextPage(next);
      }) // add sort ?
      .catch((err) => console.error(err));
  }, [resultCount, searchString, paginationKeyword, paginationString]);

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill" />
        My Repos
      </h1>
      <p>Welcome, {userName}</p>
      <ProfileCard data={data} />
      <SearchBox
        searchString={searchString}
        resultCount={resultCount}
        totalResults={totalResults}
        onQueryChange={(searchString) => setSearchString(searchString)}
        onTotalChange={(total) => setResultCount(total)}
      />
      <PageNavigation
        start={startCursor}
        end={endCursor}
        previous={hasPreviousPage}
        next={hasNextPage}
        onPageChange={(pageKeyword, pageString) => {
          setPaginationKeyword(pageKeyword);
          setPaginationString(pageString);
        }}
      />
      {repoList && (
        <ul className="list-group list-group-flush">
          {repoList.map((repo) => (
            <RepoInfo repo={repo.node} key={repo.node.id.toString()} />
          ))}
        </ul>
      )}
      <PageNavigation
        start={startCursor}
        end={endCursor}
        previous={hasPreviousPage}
        next={hasNextPage}
        onPageChange={(pageKeyword, pageString) => {
          setPaginationKeyword(pageKeyword);
          setPaginationString(pageString);
        }}
      />
    </div>
  );
}

export default App;
