const dbService = require("../../services/db.service");
const utilService = require("./utilService");
const { runSQL } = require("../../services/db.service");

module.exports = {
    query,
    getById,
    add,
    remove,
    update
}


async function query(accountId) {
    // const query = (accountId) ? `SELECT * from url WHERE url.accountId=${accountId}` : 'SELECT * from url';
    const query = 'SELECT * FROM `url`'
    let urls;
    try {
        urls = await dbService.runSQL(query)
        return urls;
    }
    catch (err) {
        console.log('error with query select budgets', err);
    }
}

async function getById(id) {
    const query = `SELECT * from url WHERE url._id = ${id}`;
    let url;
    try {
        url = await dbService.runSQL(query);
    }
    catch (err) {
        console.log('error while trying to get url-->', err);
    }
    return url;
}

// async function getBySrc(src) {
//     const query = `SELECT * from url WHERE url.src=${src}`;
//     let url;
//     try {
//         url = await dbService.runSQL(query);
//         return url[0]
//     }
//     catch (err) {
//         console.log('error while trying to get url-->', err);
//         return null;
//     }
// }

async function add(url) {
    const shortUrl = utilService.getShortUrl('sql');
    var query = `INSERT INTO url(
       src,
       shortUrl,
       nickname) VALUES(
            "${url.src}",
            "${shortUrl}",
            "${url.nickname}"
            )`;
    return dbService.runSQL(query);
}

async function update(url) {
    let okPacket;
    let query = `UPDATE url SET src= "${url.src}", shortUrl= "${url.shortUrl}" WHERE url._id=${url._id}`;
    try {
        okPacket = await dbService.runSQL(query);
        return okPacket;
    }
    catch (err) {
        console.log('error with updating the url', err);
    }
}

async function remove(id) {
    let query = `DELETE FROM url WHERE url._id = ${id}`;
    try {
        await dbService.runSQL(query)
    }
    catch (err) {
        console.log(err);
    }
}
