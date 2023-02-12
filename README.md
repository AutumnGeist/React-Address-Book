# React Address Book
An address book application built using ReactJS, React-Bootstrap, and JSON-server. Utilizes React Hooks and async/await Fetch API for performing RESTful HTTP requests. Demonstrates database CRUD operations, form validation, pagination, conditional component rendering, and search functionalities.  

## Usage
This app is filled with sample contact data which is hosted on GitHub via My-JSON-Server. **Any changes made are faked and are not persisted**. This means that you can feel free to play around with the data!

This repo is hosted on GitHub pages! Check it out in action [here](https://autumngeist.github.io/React-Address-Book/)!

## JSON-Server Resources
[JSON-Server](https://github.com/typicode/json-server) /
[My-JSON-Server](https://my-json-server.typicode.com/)

# Getting Started
```
git clone https://github.com/AutumnGeist/React-Address-Book.git
cd react-address-book
npm install
npm start
```

For more help running React apps, see [React Project Run](#react-project-run) documentation below.

## Local Usage
Switch to using your local JSON-server to persist database changes. The only change needed is updating the URL variable to your local host. For example: http://localhost:5000/addressBook/

### Local JSON-Server Instructions
Start the service and have it use the db.json file. Adding a port is optional: /
`json-server --watch db.json --port 5000` /
Start the server: /
`npm run server`

For more help, reference [JSON-Server Resources](#json-server-resources)

# React Project Run
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

