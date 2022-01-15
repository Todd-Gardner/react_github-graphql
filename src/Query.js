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
const githubSearchQuery = (
  searchString,
  resultCount,
  paginationKeyword,
  paginationString
) => {
  return {
    query: `
      {
        viewer {
          name
        }
        search(query: "${searchString} user:Todd-Gardner sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${resultCount}, ${paginationString}) {
          repositoryCount
          edges {
            cursor
            node {
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
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `,
  };
};

export { githubQuery, githubSearchQuery };
