const mongoose = require('mongoose')
    Dog = mongoose.model('Jersey')

const jerseys = require('../../controllers/jerseys')

module.exports = function(app) {

// // Get all jerseys
app.get('/api/jerseys', jerseys.findAll)

// Create a jersey
app.post('/api/jerseys', jerseys.create);

// Find a jersey by id
app.get('/api/jerseys/:id', jerseys.findOne);

// Update a jersey
app.put('/api/jerseys/:id/', jerseys.edit);

// Delete a jersey
app.delete('/api/jerseys/:id', jerseys.delete);

// app.post('/jerseys/:id/rates', jerseys.rateCreate);

}
