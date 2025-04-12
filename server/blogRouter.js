const express = require("express");
const router = express.Router();

function blogRouter() {
    router.get("/", (req, res) => {
        res.render("blogs/all");
    });

    router.get("/why-use-noteroom", (req, res) => {
        res.render("blogs/why-use-noteroom");
    });

    return router;
}

module.exports = blogRouter;
