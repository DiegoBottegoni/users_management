const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/Users.js");  // Raro
require('dotenv').config();

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/userManagement')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Usar las rutas de usuarios
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
