const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/users-api";
const obj = {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true,useFindAndModify : false }
mongoose.connect(url, obj);

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))