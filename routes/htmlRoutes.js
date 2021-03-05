const path = require("path");

module.exports = (app) => {
  app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "../tables.html"));
  });

  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../reserve.html"));
  });

  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};
