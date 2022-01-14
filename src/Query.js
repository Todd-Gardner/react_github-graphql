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
const githubSearchQuery = {
  //can add search terms before user ie movie
  query: `
      {
        viewer {
          name
        }
        search(query: "user:Todd-Gardner sort:updated-desc", type: REPOSITORY, first: 20) {
          nodes {
            ... on Repository {
              name
              id
              description
              url
              viewerSubscription
            }
          }
        }
      }
    `,
};

export { githubQuery, githubSearchQuery };
