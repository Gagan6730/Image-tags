var unirest = require("unirest");

var req = unirest("GET", "http://api.imagga.com/v1/tagging");

req.query({
    "url": "http://playground.imagga.com/static/img/example_photo.jpg",
    "version": "2"
});

req.headers({
    "authorization": "Basic YWNjXzJkYzdkNzNjMmYwODliMToxYzQ3Yzg2ZDg0YjdmYjdjYjZjNzQ1NTQ1MmYwNTgzMQ==",
    "accept": "application/json"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
// console.log("Hello World!!")