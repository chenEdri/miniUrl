const MongoClient = require('mongodb').MongoClient;
const mysql = require('mysql');
const uri = `mongodb+srv://chen:chino220491@cluster0.iyehd.mongodb.net/?retryWrites=true&w=majority`
const config = require('../config')

module.exports = {
    getCollection,
    runSQL
}

/* Mongo Db */

// Database Name
const dbName = 'shortUrl_db';

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

/* My Sql Db*/

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "url_db",
    multipleStatements: true
});

connection.connect(err => {
    // if (err) throw new Error('mySql failed connection');
    if(err) console.log('failed connect to mysql');
    console.log('connected to SQL server');
})

function runSQL(req) {
    console.log('req-------->',req);
    return new Promise((resolve, reject) => {
        connection.query(req, function (error, results, fields) {
            if (error) reject(error);
            else resolve(results);
            // // not entirely clear on whether connection.end() should be called here or not.
            // // Leaning towards not.
            // connection.end();
        });
    })
}


