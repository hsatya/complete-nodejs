const fs = require('fs');
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('01-json.json', bookJson);
// const dataBuffer = fs.readFileSync('01-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(dataBuffer);
// console.log(dataJson);
// console.log(data);

const bufferData = fs.readFileSync('01-json.json');
const jsonData = bufferData.toString();
const data = JSON.parse(jsonData);
data.name = 'Harshit Satya';
data.age = 39;
const dataJson = JSON.stringify(data);
fs.writeFileSync('01-json.json', dataJson);
