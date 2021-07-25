const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports={
   getShortUrl,
}

function getShortUrl(dbName){
    let randomString = Math.random().toString(36).slice(-5);
    console.log(randomString);
    return dbName + '.' + randomString;
}
