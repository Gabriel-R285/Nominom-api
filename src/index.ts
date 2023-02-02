const express = require('express');
const {Application} = require('express');
const port = process.env.PORT || 3001;
const db = require('./database/Models/Index');
const connection = require('./database/config/postgresql');
const router = require('./Routes/Rutas');

const app: typeof Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/users', router);
app.get("/api/v1/users", (req, res) => {
  res.send("Hola Mundo");
});


const dbconnect = async(): Promise <void> => {
  try {
      await connection.connect()
      await connection.on("connect", () => {
      console.log("Postgresql connection")
      })
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
}

void dbconnect();

const sequelizeintoPostgres = async(): Promise<any> => {
  try {
     await db.sequelize.authenticate();
     console.log('Connection has been established successfully.');
  } catch (error) {
     console.error('Unable to connect to the database:', error);
  }
}

void sequelizeintoPostgres();

db.models

const syncro = async(): Promise<void>  => {

const eraseDatabaseOnSync = true;
db.sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    await app.listen(3001, () =>
    console.log('Server listening  on port: 3001'),
  );
}).catch(error => {
        console.error('Server couldnt connected:', error);
        process.exit(1)
      });
};

void syncro();



