// Create your GitHub GraphQL API Token through the settings of your GitHub account.
// Modify the 2 lines below with your user name and the token.
// The token goes AFTER bearer. DO NOT delete bearer, it is used for authentication.
// Rename this file to db.js

const github = {
  baseURL: "https://api.github.com/graphql",
  username: "Enter GitHub user name here", // modify this line
  headers: {
    "Content-Type": "application/json",
    Authorization: "bearer ENTER-YOUR-API-TOKEN-HERE", // modify this line
  },
};

export default github;
