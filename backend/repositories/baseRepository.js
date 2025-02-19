const db = require('../dbConnection'); // Configuración de conexión
const moment = require('moment');
class BaseRepository {
    constructor(tableName) {
        this.tableName = tableName;
        this.connection = null; // start it as null
    }

    async getConnection() {
        // just to make sure that we are using one conection 
        if (!this.connection) {
            this.connection = await db.connectDB();
        }
        return this.connection;
    }

    async findByForeignKey(foreignKeyValue, foreignKeyColumn) {
        const query = `SELECT * FROM [dbo].[${this.tableName}] WHERE [${foreignKeyColumn}] = @foreignKeyValue`;
        const connection = await this.getConnection();
        const request = connection.request();
        request.input('foreignKeyValue', db.sql.Int, foreignKeyValue); // Pasar el valor de la clave foránea
        const result = await request.query(query);
        return result.recordset; // Retornar todos los registros encontrados
    }
    
      // Contar registros por clave foránea
    async countByForeignKey(foreignKeyValue, foreignKeyColumn) {
        const query = `SELECT COUNT(*) as count FROM [dbo].[${this.tableName}] WHERE [${foreignKeyColumn}] = @foreignKeyValue`;
        const connection = await this.getConnection();
        const request = connection.request();
        request.input('foreignKeyValue', db.sql.Int, foreignKeyValue); // Pasar el valor de la clave foránea
        const result = await request.query(query);
        return result.recordset[0].count; // Retornar la cantidad
    }
      
    
    async findAll() {
        const query = `SELECT * FROM [dbo].[${this.tableName}]`;
        const connection = await this.getConnection(); 
        const result = await connection.request().query(query); 
        return result.recordset; 
    }
    //GET Device´s Location Names
    async GetNameData() {
        const query = `SELECT 
        d.deviceID,
        d.deviceName,
        d.deviceDescription,
        d.device_references,
        d.fixedAssets,
        d.siteID,
        ISNULL(s.name, NULL) AS siteName,
        d.workshopID,
        ISNULL(w.name, NULL) AS workshopName,
        d.madeAt,
        d.state,
        d.category,
        d.deparment,
        d.section
      FROM [DeviceReport].[dbo].[devices] d
      LEFT JOIN [DeviceReport].[dbo].[sites] s ON d.siteID = s.siteID
      LEFT JOIN [DeviceReport].[dbo].[workshops] w ON d.workshopID = w.workshopID;`;
        const connection = await this.getConnection(); 
        const result = await connection.request().query(query); 
        return result.recordset; 
    
    }

    async findById(id, columnName) {
        const query = `SELECT * FROM [dbo].[${this.tableName}] WHERE [${columnName}] = @id`;
        const connection = await this.getConnection(); 
        const request = connection.request();
        request.input('id', db.sql.Int, id); 
        const result = await request.query(query);
        return result.recordset[0]; 
    }
    

    async create(data) {
        const keys = Object.keys(data).join(',');
        const values = Object.keys(data)
            .map((key) => `@${key}`)
            .join(',');
            const query = `INSERT INTO [dbo].[${this.tableName}] (${keys}) VALUES (${values})`;

        const connection = await this.getConnection(); 
        const request = connection.request();
        Object.entries(data).forEach(([key, value]) => {
            request.input(key, value);
        });
        await request.query(query);
        return data; 
    }
    
    async deleteById(id,nameid) {
        const query = `DELETE FROM [dbo].[${this.tableName}] WHERE [${nameid}] = @id`;
        const connection = await this.getConnection();
        const request = connection.request();
        request.input('id', db.sql.Int, id);
        const result = await request.query(query);
        return result;
      }
      async findByIds(ids, columnName = 'id') {
        const idsString = ids.map(id => `'${id}'`).join(','); // Convierte el array de IDs a una cadena separada por comas
        const query = `SELECT * FROM [dbo].[${this.tableName}] WHERE [${columnName}] IN (${idsString})`;
        const connection = await this.getConnection(); 
        const request = connection.request();
        const result = await request.query(query);
        return result.recordset; // Devolvemos todos los registros
      }
      

    async EditById(id, data, columnName = 'id') {
        // Validamos que el objeto `data` no esté vacío
        if (!data || Object.keys(data).length === 0) {
            throw new Error('No se proporcionaron datos para actualizar');
        }
        // Construimos los pares "columna = valor" dinámicamente
        const updates = Object.keys(data)
            .map((key) => `[${key}] = @${key}`) 
            .join(', ');
        const query = `UPDATE [dbo].[${this.tableName}] SET ${updates} WHERE [${columnName}] = @id`;
        const connection = await this.getConnection(); 
        const request = connection.request();

        // Añadimos los parámetros dinámicamente
        Object.entries(data).forEach(([key, value]) => {
            request.input(key, value); 
        });
    
        // Agregamos el ID como parámetro
        request.input('id', db.sql.Int, id);
    
        const result = await request.query(query); // Ejecutamos la consulta
    
        return result.rowsAffected[0] > 0; // Retornamos true si se actualizó una fila
    }
    
    
}

module.exports = BaseRepository;
