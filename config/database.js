//mongodb+srv://admin:<password>@mjllondono.im1jaf5.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");

// const host = "localhost";
// const port = "27017";
// const db = "mybisnesdb";


const host = "mongodb+srv://admin:123@mjllondono.im1jaf5.mongodb.net/?retryWrites=true&w=majority";
const port = "8080";
const db = "mybisnesdb";

exports.mongoConnect = () => {

    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = `mongodb+srv://admin:123@mjllondono.im1jaf5.mongodb.net/${db}?retryWrites=true&w=majority`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"))

}