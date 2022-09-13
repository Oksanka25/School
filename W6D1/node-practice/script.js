const multiply = (a, b) => a * b;

let n = multiply(5, 8);

console.log(n);

const fs = require('fs');
console.log(typeof fs);

fs.writeFile('./hello.txt', 'Hello!', function () {
    console.log('done creating file');
});

let daysOfWeek = require('./days-of-week');

let day = daysOfWeek.getWeekday(5);
console.log(day);


// Don't specify path when module is in node_modules
const request = require('request');
request(
    'http://jsonplaceholder.typicode.com/users',
    function (err, res, body) {
        console.log(body);
    }
);