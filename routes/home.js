const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Express-Shop-API", message: "Welcome to Express-Shop-API" });
});

module.exports = router;
