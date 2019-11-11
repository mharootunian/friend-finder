const express = require("express");
const app = express();

const path = require("path");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

app.use("/", htmlRoutes);
app.use("/api/v1", apiRoutes);

app.use(express.json());

const server = app.listen(8080, () => {
    console.log(`Server started at ${server.address().address}:${server.address().port}`);
});