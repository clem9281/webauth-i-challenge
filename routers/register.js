const express = require("express");
const db = require("../data/dbHelpers");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.route("/").post(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Bad request" });
  const hash = bcrypt.hashSync(password, 8);
  req.body.password = hash;
  try {
    const newUserId = await db.addUser(req.body);
    const newUser = await db.findBy({ id: newUserId[0] });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Sorry, we couldn't register a new user at this time" });
  }
});

module.exports = router;
