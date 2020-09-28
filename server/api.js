// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function (app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-37ogfblt.eu.auth0.com/.well-known/jwks.json",
    }),
    audience: "http://localhost:8083/api/",
    issuer: "https://dev-37ogfblt.eu.auth0.com/",
    algorithms: ["RS256"],
  });
  /*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API Route

  app.get("/api/", (req, res) => {
    res.send("API works");
  });
};
