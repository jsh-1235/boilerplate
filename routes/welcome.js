var express = require("express");
var router = express.Router();

/* GET welcome listing. */
router.get("/", function (req, res, next) {
  res.render("welcome", { title: "welcome" });
});

module.exports = router;
