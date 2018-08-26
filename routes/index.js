const getAllMovies = require("../controllers/getAllMovies");
const getMovieById = require("../controllers/getMovieById");
const getActorByName = require("../controllers/getActorByName");

const routes = app => {
    app.get("/", (req, res) => {
      res.redirect("/api");
    });

    app.route("/api").get((req, res) => {
      res.send("Welcome to movies restful API's.");
    });

    app.route("/api/movies/all").get((req, res) => {
      res.status(200).json({
        data: getAllMovies()
      });
    });

    app.route("/api/movies/:id").get((req, res) => {
      const id = req.params.id;
      if (!id) {
        res.status(404).json(
          {
            message: `Movie id is missing`
          },
          404
        );
      }
      res.status(200).json({
        data: getMovieById(id)
      });
    });

    app.route("/api/actors/:name").get((req, res) => {
        const name = req.params.name;
        if (!name) {
          res.status(404).json(
            {
              message: `Actor name is missing`
            }
          );
        }
        const actorInfo = getActorByName(name);
        if (!actorInfo.length) {
          res.status(404).json(
            {
              message: `Actor not found`
            }
          );
        } else {
          res.status(200).json({
            data: actorInfo
          });
        }
      }
    )
    ;

    app.get("*", function (req, res) {
      res.status(404).json(
        {
          message: "Not found"
        }
      );
    });
  };

module.exports = routes;
