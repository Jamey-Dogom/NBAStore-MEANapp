const mongoose = require('mongoose')
const Jersey = mongoose.model('Jersey')

module.exports = {
    create: function (req, res) {
        Jersey.create(req.body)
            .then(jersey => {
                res.json(jersey)
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    findAll: function (req, res) {
        Jersey.find()
            .sort('title')
            .then(jersey => res.json(jersey))
            .catch(err => res.json(err));
    },

    findOne: function (req, res) {
        Jersey.findById(req.params.id)
            .then(jersey => res.json(jersey))
            .catch(err => res.json(err));
    },

    edit: function (req, res) {
        Jersey.updateOne({
                _id: req.params.id
            }, {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    image: req.body.image
                }
            }, {
                new: true,
                runValidators: true
            })
            .then(jersey => {
                res.json({
                    jersey
                })
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    delete: function (req, res) {
        Jersey.deleteOne({
                _id: req.params.id
            })
            .then(() => {
                res.redirect('/jerseys')
            })
            .catch(err => res.json(err));
    },

    //     rateCreate: function (req, res) {
    //         Jersey.findByIdAndUpdate(
    //             req.params.id, {
    //                 $push: {
    //                     rate: new Rating(req.body)
    //                 }
    //             },
    //             {
    //             runValidators : true,
    //             new : true
    //             }
    //         )
    //         .catch(console.log)
    //         .finally(() => res.redirect('/jerseys'))
    // },

}