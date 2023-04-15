const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                const RESPONSE = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: "api/genres"
                    },
                    data: genres
                }
                res.json(RESPONSE)
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.json(genre);
            });
    }

}

module.exports = genresController;