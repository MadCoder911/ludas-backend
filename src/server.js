const { start } = require("repl");
const app = require("./app");
const { mongoConnect } = require("./../services/mongo");
require("dotenv").config();
const PORT = process.env.port || 8000;
const startServer = async () => {
  await mongoConnect();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};
startServer();
