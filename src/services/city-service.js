const { StatusCodes } = require('http-status-codes')
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-errors');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {

        if (error.name == 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new city object.', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function getAllCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Cannot get all cities.', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getCityById(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        throw new AppError(`Cannot find city with id ${id}`, StatusCodes.NOT_FOUND)
    }
}

async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('City you requested to update is not present.', error.statusCode)
        }
        throw new AppError(`Cannot update city with id ${id}`, StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function deleteCity(id) {
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        throw new AppError(`Cannot delete city with id ${id}`, StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity,
    getAllCities,
    getCityById,
    updateCity,
    deleteCity
}
