const express = require("express");
const app = express();

const path = require("path");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.use(express.json());
app.use(express.static("app/public"));

const server = app.listen(8080, () => {
    console.log(`Server started at ${server.address().address}:${server.address().port}`);
});