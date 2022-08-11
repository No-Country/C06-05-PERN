const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://drzdyqvyxfmefz:7b6b5d07535d4104060c5787e86b948dc9e2081087eb7b26bbe531c9fccec92e@ec2-44-207-126-176.compute-1.amazonaws.com:5432/d3e92dmaamfnmf?ssl=no-verify')


/////Conexion Alternativa

/* const sequelize = new Sequelize({
    database: "d3e92dmaamfnmf",
    username: "drzdyqvyxfmefz",
    password: "7b6b5d07535d4104060c5787e86b948dc9e2081087eb7b26bbe531c9fccec92e",
    host: "ec2-44-207-126-176.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
}); */


try {
    sequelize.authenticate();
    console.log('Conexion exitosa a la base de datos');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
