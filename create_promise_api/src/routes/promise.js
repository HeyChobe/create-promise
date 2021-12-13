var express = require('express');
var router = express.Router();
var {addPromise, getPromises, deletePromise} = require("../controllers/promise.controller");

router.post("/",addPromise);
router.get("/",getPromises);
router.delete("/:id",deletePromise);

module.exports = router;