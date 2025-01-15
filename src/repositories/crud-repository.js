const { Logger } = require('../config');

class crudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        console.log("Inside repo");

        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo ");
            throw error;

        }

        // async read() {
        //     return this.model.find();
        // }

        // async readOne(id) {
        //     return this.model.findById(id);
        // }

    }
    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo ");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo ");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo ");
            throw error;
        }
    }

    async update(id, data) { // data is the object {col:value, ...}
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo ");
            throw error;
        }
    }
}

module.exports = crudRepository;