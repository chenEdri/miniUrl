const dbService = require('../../services/db.service')
const utilService = require('./utilService')
const ObjectId = require('mongodb').ObjectId

module.exports={
    query,
    getById,
    add,
    remove,
    update
}

async function query(filterBy={}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('url')
    try {
        const items = await collection.find(criteria).toArray();
        console.log(collection);
        return items
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}


async function getById(UrlId) {
    const collection = await dbService.getCollection('url')
    try {
        const url = await collection.findOne({ "_id": ObjectId(UrlId) })
        return url
    }catch (err) {
        console.log(`ERROR: while finding url ${UrlId}`)
        throw err;
    }
}

async function add(url) {
    const shortUrl = utilService.getShortUrl('mg');
    url.shortUrl = shortUrl;
    url.createdAt = Date.now();
    const collection = await dbService.getCollection('url')
    try {
        await collection.insertOne(url);
        return url;
    } catch (err) {
        console.log(`ERROR: cannot insert url`)
        throw err;
    }
}


async function remove(UrlId) {
    const collection = await dbService.getCollection('url')
    try {
        await collection.deleteOne({ "_id": ObjectId(UrlId) })
    } catch (err) {
        console.log(`ERROR: cannot remove url ${UrlId}`)
        throw err;
    }
}


async function update(url) {
    const collection = await dbService.getCollection('url')
    url._id = ObjectId(url._id);
    url.updatedAt = Date.now();
    try {
        await collection.replaceOne({ "_id": url._id }, url )
        return url
    } catch (err) {
        console.log(`ERROR: cannot update url ${url._id}`)
        throw err;
    }
}



function _buildCriteria(filterBy) {
    const criteria = {};
    for (const key in filterBy) {
        console.log(filterBy[key]);
        if (filterBy[key] !== 'null') {
            criteria[key] = { $regex: new RegExp(filterBy[key], 'i') }
        }
    }
    return criteria;
}

