var MongoClient = require('mongodb').MongoClient;

function connect() {
    MongoClient.connect("mongodb://pfeldman:pabsebfel90@ds263837.mlab.com:63837/heroku_t7kth0pg", function(err, db) {
        if(!err) {
            console.log("We are connected");
        } else {
            console.log(err)
        }
    });
}

module.exports = connect;