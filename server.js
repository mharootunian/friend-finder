const express = require("express");
const app = express();

const path = require("path");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const port = process.env.PORT || 8080;


app.use(express.json());
app.use(express.static("app/public"));
app.use(express.urlencoded( { extended: true}));


app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

const server = app.listen(port, () => {
    console.log(`Server started at ${server.address().address}:${server.address().port}`);
}); 