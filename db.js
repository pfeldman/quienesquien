import {MongoClient} from 'mongodb';

function connect() {
    return new Promise((resolve, error) => {
        MongoClient.connect("mongodb://pfeldman:pabsebfel90@ds263837.mlab.com:63837/heroku_t7kth0pg", function(err, db) {
            if(!err) {
                resolve(db)
            } else {
                console.error(err)
            }
        })
    })

}

module.exports = connect;