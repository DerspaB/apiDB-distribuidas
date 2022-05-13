const { Router } = require("express");
const {
  getPersons,
  postPersons,
  putPersons,
  deletePersons,
} = require("../controllers/persons/persons");

const router = Router();

router.get("/", getPersons);

router.put("/:id", putPersons);
router.delete("/:id", deletePersons);

router.post("/", postPersons);

// router.patch("/", patchUsers);

module.exports = router;
