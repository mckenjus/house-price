const houses = require(`../db.json`)
let id = 4
module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
        console.log(`houses sent`)
    },
    deleteHouse: (req, res) => {
        console.log(houses)
        const {id} = req.params
        const index = houses.findIndex( house => {
            return house.id === +id;
        })
        if(index === -1) {
            res.status(400).send('cannot find this house')
        } else { 
            houses.splice(index, 1);
            res.status(200).send(houses);
        }
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;

        const newHouse = {houseID, address, price, imageURL}
        houses.push(newHouse);
        id++;

        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        let {type} = req.body
        let {id} = req.params
        
        if(type === 'plus') {
            const index = houses.findIndex(house => {return house.id === +id
            })
            houses[index].price = houses[index].price + 10000
            res.status(200).send(houses)
        }else if(type === 'minus') {
            const index = houses.findIndex(house => {return house.id === +id
        })
        houses[index].price = houses[index].price - 10000
        res.status(200).send(houses)}
    }
}
