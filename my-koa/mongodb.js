/* init Mongodb connection */
const MongoClient = require('mongodb').MongoClient;

// TODO: replace the hardcoded IP and port with the values from env
const MONGO_URL = "mongodb://179.99.0.5:27017";

module.exports = function (app) {
    MongoClient.connect(MONGO_URL, (err, client) => {
        if (err) {
            console.log(err);
        } else {
            const db = client.db('react_pan');
            app.logs = db.collection('logs');
        }
    });
};