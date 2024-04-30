const fs = require('fs');
// import from data.js
const data = require('./data');

fs.readFile("data.js", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
  });

fs.writeFile("userData.txt", data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File written successfully!");
    }
  });