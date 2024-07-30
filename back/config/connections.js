const mongoose1 = require("mongoose");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@clusteradso2669734.etir8is.mongodb.net/reparado5?retryWrites=true&w=majority`;

mongoose1.connect(uri);

module.exports = mongoose1;
