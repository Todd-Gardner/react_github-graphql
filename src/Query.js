const githubQuery = {
  query: `
      {
        viewer {
          name
          repositories(first:20) {
            nodes {
                name
                id
                description
                url
            }
          }
        }
      }
    `,
};
const githubSearchQuery = (queryString, pageCount) => {
    // change to resultCount
  return {
    query: `
      {
        viewer {
          name
        }
        search(query: "${queryString} user:Todd-Gardner sort:updated-desc", type: REPOSITORY, first: ${pageCount}) {
          repositoryCount
          nodes {
            ... on Repository {
              name
              id
              description
              url
              viewerSubscription
              licenseInfo {
                  spdxId
              }
            }
          }
        }
      }
    `,
  };
};

export { githubQuery, githubSearchQuery };
