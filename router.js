const Router = require('express')
const TableController =  require("./TableController.js")

const router = new Router()

router.get('/table', TableController.getAll)
router.get('/table/salary', TableController.getUniqSalaries)

module.exports = router;
