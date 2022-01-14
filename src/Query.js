const githubQuery = {
  query: `
      {
        viewer {
          name
          repositories(first:10) {
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
        search(query: "user:Todd-Gardner sort:updated-desc", type: REPOSITORY, first: 10) {
          nodes {
            ... on Repository {
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

export { githubQuery, githubSearchQuery };
