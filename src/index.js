const express = require("express");

const app = express();

require("../startup/config");
require("../startup/routes")(app);
const port = process.env.PORT || 3000;
console.log("Envirnmoent: ", process.env.NODE_ENV);
app.listen(port, () => console.log(`Listening to port ${port}...`));
