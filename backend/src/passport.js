const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const { Sequelize } = require('sequelize');
const { usuarios } = require("./database");

module.exports = passport.use(
    new jwtStrategy(
        {
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "MyKey",
        },
        (jwt_payload, done) => {
            console.log("holaaaaaa");
            console.log(jwt_payload);
            usuarios.findOne({
                where: {
                    id: jwt_payload.id,
                },
            })

                .then((usuarios) => {
                    console.log(usuarios);
                    if (usuarios) {
                        return done(null, usuarios);
                    } else if (err) {
                        console.log(err);
                        return done(err, false);
                    } else {
                        return done(null, false);
                    }
                })

                .catch((err) => {
                    console.log(err);
                    return done(err, false);
                });
        }
    )
);
