const { Logger } = require('../config');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-errors');

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
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if (!response) {
            throw new AppError("Not able to find the response", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if (!response) {
            throw new AppError("Not able to find the response", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;

    }

    async update(id, data) {
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        });
        if (!response) {
            throw new AppError("Not able to find the response", StatusCodes.NOT_FOUND);
        }
        return response;

    }
}

module.exports = crudRepository;