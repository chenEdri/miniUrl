const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getUrl, getUrls, deleteUrl, updateUrl, addUrl} = require('./url.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/:dbName', getUrls);
router.get('/:dbName/:id', getUrl);
router.post('/:dbName', addUrl);
router.put('/:dbName/:id', updateUrl)
router.delete('/:dbName/:id', deleteUrl);

module.exports = router