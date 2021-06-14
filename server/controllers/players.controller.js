const Players = require('../models/players.model')

module.exports = {
    createPlayer: (request, response) => {
        const {name, position, status1, status2, status3} = request.body;
        Players.create({
            name,
            position,
            status1,
            status2,
            status3,
        })
            .then(player => response.json(player))
            .catch(err => response.status(400).json(err))
    },
    getAllPlayers: (request,response) => {
        Players.find({})
            .then(players => response.json(players))
            .catch(err => response.status(400).json(err))
    },
    getPlayer: (request,response) => {
        Players.findOne({_id: request.params.id})
            .then(player=> response.json(player))
            .catch(err => response.status(400).json(err))
    },
    updatePlayer: (request,response) => {
        Players.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
    },
    deletePlayer: (request,response) => {
        Players.deleteOne({_id: request.params.id})
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.status(400).json(err))
    }
}