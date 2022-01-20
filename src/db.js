const github = {
  baseURL: "https://api.github.com/graphql",
  username: process.env.REACT_APP_USERNAME,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${process.env.REACT_APP_GH_TOKEN}`,
  },
};

export default github;
