The purpose of this web application is to create an interface so a user can submit a number and get back the english word equivalent of that number.

Prerequisites to run this application:
1. Make sure you download the required dependencies by running `npm i` on your terminal.
2. In order for this application to work, you need to have the 'server' folder running on localhost:3001 as well and have already set up your local mongo database. Please see /server/README.md for mongodb installation instructions.
3. Please type in `npm start` in your terminal to start up this react app.

High level overview of each file:

### /components
- Contains generic and reusable components with set styles.
1. Button.js
2. Input.js
2. ErrorView.js

### App.js
- State => 1. number, 2. string, 3. error (each three states are defined in the list below lines 17-19)
- This is the main file in this web application using Input and Button components.
1. Stores the user's input in `number`
2. When the button of submission is clicked it will call the `/numbers/:number` POST api endpoint and store the result in `string` and show it to the user after a successful submission.
3. In case there is an error from the API, then the error flag will be true and this is stored in `error`
