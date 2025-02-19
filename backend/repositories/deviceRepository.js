// repositories/deviceRepository.js

const BaseRepository = require('./baseRepository');
const Device = require('../models/deviceModel');  // Importa el modelo Device

class DeviceRepository extends BaseRepository {
    constructor() {
        super('Devices'); // Nombre de la tabla en la base de datos
    }

    /**
     * Convierte los datos en una instancia del modelo Device
     * @param {Object} data - Datos del dispositivo
     * @returns {Device|null} - Instancia del modelo Device o null si no hay datos
     */
    mapToModel(data) {
        return data ? new Device(data) : null;
    }

    /**
     * Obtiene todos los dispositivos
     * @returns {Device[]} - Array de instancias del modelo Device
     */
    async findAll() {
        const data = await super.findAll();
        return data.map(this.mapToModel);  // Mapea los datos a modelos
    }
    /**
     * Obtiene todos los dispositivos
     * @returns {Device[]} - Array de instancias del modelo Device
     */
    async  getNameOFallLocation() {
        const data = await super.GetNameData();
        return data;  // Mapea los datos a modelos
    }
        /**
     * Encuentra un dispositivo por su ID
     * @param {number} id - El ID del dispositivo
     * @returns {Device|null} - Instancia del modelo Device o null si no se encuentra
     */
    async findById(id) {
        const data = await super.findById(id, 'deviceID');
        return this.mapToModel(data);  // Mapea los datos a un modelo
    }

    /**
     * Encuentra un dispositivo por su site ID
     * @param {number} id - El ID del site
     * @returns {Device|null} - Instancia del modelo Device o null si no se encuentra
     */
    async findBySiteId(id) {
        const data = await super.findByForeignKey(id, 'siteID'); // Buscar por clave foránea
        return data.map(this.mapToModel); // Mapea cada registro a una instancia del modelo Device
      }

      /**
     * Encuentra un dispositivo por su workshop ID
     * @param {number} id - El ID del workshop
     * @returns {Device|null} - Instancia del modelo Device o null si no se encuentra
     */
    async findByWorkshopId(id) {
        const data = await super.findByForeignKey(id, 'workshopID'); // Buscar por clave foránea
        return data.map(this.mapToModel); // Mapea cada registro a una instancia del modelo Device
      }
      // Contar dispositivos por workshop ID
// Contar dispositivos por workshop ID
    async countByWorkshopId(id) {
        return await super.countByForeignKey(id, 'workshopID'); // Usa una función genérica en el repositorio base
    }
    async countBySiteId(id) {
        return await super.countByForeignKey(id, 'siteID'); // Usa una función genérica en el repositorio base
    }

    /**
     * Crea un nuevo dispositivo
     * @param {Object} deviceData - Datos del dispositivo a crear
     * @returns {Device} - Instancia del modelo Device con los datos creados
     */
    async create(deviceData) {
        const data = await super.create(deviceData);
        return this.mapToModel(data);  // Mapea los datos a un modelo
    }

    /**
     * Actualiza un dispositivo por su ID
     * @param {number} id - El ID del dispositivo
     * @param {Object} updateData - Datos a actualizar
     * @returns {boolean} - True si se actualizó correctamente
     */
    async updateById(id, updateData) {
        return await super.EditById(id, updateData, 'deviceID');
    }

    /**
     * Elimina un dispositivo por su ID
     * @param {number} id - El ID del dispositivo
     * @returns {boolean} - True si se eliminó correctamente
     */
    async deleteById(id) {
        return await super.deleteById(id, 'deviceID');
    }
}

module.exports = DeviceRepository;
