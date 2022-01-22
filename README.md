# React project that connects to the GitHub GraphQL API to retrieve and display a list of repositories.

*** GitHub Token being deleted on deploy for security reasons. Need to generate another token and either use serverless functions or modify the deploy to use GH enviroment secrets ***

## Features
- Uses GraphQL to reduce the number of calls to the API.
- Dynamically search and sort list of repos.
- Dynamically change the amount of results shown on the page.
- Display user card with the name, avatar, bio and link to thier GitHub profile page.

- Uses Bootstrap and bootstrap-icons along with Sass and a custom scss to update global values.

## Installation / Setup
First clone the project. 
Go to your GitHub settings and create an API token.
Find src/dbExample.js and modify per the instructions (don't forget to rename the file to db.js).
In project root :
- npm init to install the dependencies.
- npm start to run.



## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)


This is a modified version of the react_graphQL course available on LinkedIn Learning.
