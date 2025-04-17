const express = require("express");
const router = express.Router();

function blogRouter() {
    router.get("/", (req, res) => {
        res.render("blogs/all");
    });

    router.get("/why-use-noteroom", (req, res) => {
        res.render("blogs/why-use-noteroom");
    });

    router.get("/the-productivity-code-by-anirban-biswas", (req, res) => {
        res.render("the-productivity-code-by-anirban-biswas");
    });

    return router;
}

module.exports = blogRouter;
