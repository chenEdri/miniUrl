const mgUrlService = require('./mgUrl.service')
const sqlUrlService = require('./sqlUrl.service')
const logger = require('../../services/logger.service')

async function getUrls(req, res) {
    const dbName = req.params.dbName;
    console.log(dbName);
    let urls;
    if (dbName === 'all') {
        let mgUrls = await mgUrlService.query(req.query);
        let sqlUrls = await sqlUrlService.query(req.query);
        mgUrls.push(...sqlUrls);
        urls= mgUrls
    }
    else urls = (dbName === 'mg') ? await mgUrlService.query(req.query) : await sqlUrlService.query(req.query);
    logger.debug(urls);
    res.send(urls)
}

async function getUrl(req, res) {
    const dbName = req.params.dbName;
    if (dbName ==='all') return;
    let url = (dbName === 'mg') ? await mgUrlService.getById(req.params.id) : await sqlUrlService.getById(req.params.id);
    res.send(url)
}

async function addUrl(req, res) {
    const dbName = req.params.dbName;
    if (dbName ==='all') {
        await mgUrlService.add(newUrl)
        await sqlUrlService.add(newUrl)
        res.send(newUrl);
    }else{
        const newUrl = req.body;
        (dbName === 'mg') ? await mgUrlService.add(newUrl) : await sqlUrlService.add(newUrl)
        res.send(newUrl);
    }
}

async function deleteUrl(req, res) {
    const dbName = req.params.dbName;
    if (dbName ==='all') return;
    (dbName === 'mg') ? await mgUrlService.remove(req.params.id) : await sqlUrlService.remove(req.params.id)
    res.end()
}

async function updateUrl(req, res) {
    const dbName = req.params.dbName;
    if (dbName ==='all') return;
    const url = req.body;
    (dbName === 'mg') ? await mgUrlService.update(url) : await sqlUrlService.update(url)
    res.send(url)
}

module.exports = {
    getUrls,
    getUrl,
    addUrl,
    updateUrl,
    deleteUrl
}