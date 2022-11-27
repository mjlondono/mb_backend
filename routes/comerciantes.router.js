const express = require("express");
const router = express.Router();
const comerciantesController = require("../controllers/comerciantes.controller");

router.post("/", comerciantesController.create);
router.get("/", comerciantesController.find);
router.get("/:id", comerciantesController.findOne);
router.put("/:id", comerciantesController.update);
router.delete("/:id", comerciantesController.remove);

module.exports = router;
