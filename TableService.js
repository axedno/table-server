const Rows = require("./Rows.js")

class TableService {

    async getAll(page, limit, salary) {
        const rowsCount = await Rows.find(salary ? {salary}: {}).count()
        const data = await Rows.find(salary ? {salary}: {}).limit(limit * 1).skip((page - 1) * limit)
        const rows = Promise.all([data, rowsCount])
        return rows;
    }
    async getUniqSalaries() {
        const salaries = await Rows.distinct('salary');
        return salaries;
    }

}


module.exports = new TableService();
