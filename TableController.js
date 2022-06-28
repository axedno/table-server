const TableService = require("./TableService.js")

class TableController {
    async getAll(req, res) {
        try {
            const {page = 1, limit = 5, salary} = req.query
            const [data, rowsCount] = await TableService.getAll(page, limit, salary);
            return res.json({'total': rowsCount, 'rows': data});
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getUniqSalaries(req, res) {
        try {
            const salaries = await TableService.getUniqSalaries()
            return res.json(salaries)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}


module.exports = new TableController()
