const express = require("express");
const mongoose = require("mongoose")
const { MONGO_URI } = require("./config");
//Routes
const postRoutes = require("./routes/api/posts");


const app = express();
//body-parser

app.use(express.json());
//connect to mongo_db
mongoose.connect(MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to mongodb"))
    .catch(err => console.log(err))

//Use routes

app.use("/api/posts", postRoutes);
const PORT = process.env.port || 5000;
app.listen(PORT, () =>
    console.log(`Server running at port ${PORT}`))