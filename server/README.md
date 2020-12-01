The purpose of this server is create a server that interacts with a database to:
1. Store numbers inputted by the user.
2. Submit a number inputted by the user and transform this number to it's english word equivalent.

Prerequisites to run this application:
1. You will need to have mongoDB set up locally and create a db with the name of "number". (https://docs.mongodb.com/manual/installation/)
  WINDOWS SET UP:
  - Download MongoDB Community Edition (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/). Try to find "MongoDB Download Center".
  - Go through the set up provided after download. For configuration set up, please follow 3b for service configuration but most of this in already set up for you.
  - Finally, you will know that MongoDB set up was complete if you are able to navigate to `C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe` successfully.
  - Once you are inside of this execution "mongo.exe", type `use number` inside your terminal to create the number database. You should get back a message that says "switched to db number".

  MAC SET UP:
  - Instructions are similar as above however you interact with MongoDB through a 3rd party called HomeBrew which has it's own commands. Please visit https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/ for proper instructions.

2. Make sure you download the required dependencies by running `npm i` on your terminal.
3. To run the server, type `node server` on your terminal.

High level overview of each file: 
### controller.js
- Contains the controller functions such as postNumber and getNumbers that manipulate or create a request and or response.

### db.js
- Connects to the local mongo database with the help of mongoose.

### index.js
- This is the file the server is running. It connects the router, the required models, and the database. 
- Contains where the server is running (in our case, it will be locally on port 3001).

### intToString.js
- This function converts integers to their respective english work equivalent using recursion. 
- Only accepts integers from 0 - 9999.

### number.js
- Defines the required schema that we expect for the database. Number can only be a number and is a required field.

### router.js
- Defines the two end points for this API. 
1. `/numbers` with GET all the numbers that have been submitted.
2. `/numbers/:number` will POST a number defined in the parameters `:number`.