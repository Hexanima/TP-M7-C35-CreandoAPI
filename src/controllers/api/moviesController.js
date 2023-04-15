const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
  create: function (req, res) {
    Movies.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id,
    })
      .then((movie) => {
        const RESPONSE = {
          meta: {
            status: 200,
            url: "api/movie/create",
          },
          data: movie,
        };
        res.json(RESPONSE);
      })
      .catch((error) => {
        const RESPONSE = {
          meta: {
            status: 400,
            url: "api/movie/create",
          },
          data: error,
        };
        res.json(RESPONSE);
      });
  },
  destroy: function (req, res) {
    let movieId = req.params.id;
    Movies.findByPk(movieId).then((movie) => {
      Movies.destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
        .then(() => {
          const RESPONSE = {
            meta: {
              status: 200,
              url: "api/movie/delete",
            },
            data: movie,
          };
          res.json(RESPONSE);
        })
        .catch((error) => {
          const RESPONSE = {
            meta: {
              status: 400,
              url: "api/movie/create",
            },
            data: error,
          };
          res.json(RESPONSE);
        });
    });
  },
};

module.exports = moviesController;
