const express = require(`express`);
const cors = require(`cors`);
const ctrl = require('./controller/ctrl');


const app = express();


app.use(express.json());
app.use(cors())

app.get(`/api/houses`, ctrl.getAllHouses);
app.post(`/api/houses`, ctrl.createHouse);
app.delete(`/api/houses/:id`, ctrl.deleteHouse);
app.put(`/api/houses/:id`, ctrl.updateHouse)

SERVER_PORT = 4004

app.listen(SERVER_PORT, () => 
console.log(`you got eyes in the sky at ${SERVER_PORT}, captian`)
)