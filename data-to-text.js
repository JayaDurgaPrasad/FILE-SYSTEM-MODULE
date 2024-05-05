const fs = require('fs');
// import from data.js

const dataArray = require('./data');
let UserJSONData;


const jsonData = JSON.stringify(dataArray);

fs.writeFile("./userData.txt", jsonData, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written successfully!");
  }
});

// let returnData;

const retrieveData =  (err, fileData) => {
  if (err) {
    console.error(err);
  } else {
    const  arrayOfObj = JSON.parse(fileData);  
    UserJSONData = arrayOfObj;
  }   
}
 const data1 = fs.readFile('userData.txt', 'utf8', retrieveData);


