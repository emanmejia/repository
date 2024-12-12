To run the application use the following:
1. npm install (install the dependencies)
2. .env - Modify the DATABASE_URL parameter to connect to your database
3. npm start

Note:
See package.json
This application is using nodemon.
This is good for development when you are making changes don't want to manually restart the server.
  "scripts": {
    "start": "nodemon index.js"
  },

Before publishing to Azure, change this to:
  "scripts": {
    "start": "node index.js"
  },

You can also remove the nodemon package:
npm remove nodemon