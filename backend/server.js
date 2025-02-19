const db = require('./dbConnection');
const express = require('express');
const deviceService = require('./services/device.service');
const siteService = require('./services/site.Service');  
const workshop = require ('./services/workshop.service')
const categoryService = require('./services/category.service')
const ExcelJS = require('exceljs');

const cors = require('cors');
const path = require('path');
db.connectDB()

const app = express();
app.use(express.json());


// Configuración de CORS para permitir acceso desde localhost:3000 y 192.168.3.94:5000
const corsOptions = {
  origin: "*" , 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions)); 

app.use(express.json());


// Rutas para dispositivos
app.get('/devices', async (req, res) => {
  const devices = await deviceService.getAllDevices();
  res.json(devices);
});



app.use(express.static(path.join(__dirname, '../frontend/build')));

// Redirigir todas las demás rutas al index.html de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} y http://0.0.0.0:${PORT}`);
});