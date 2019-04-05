const express = require("express");
const db = require("../data/dbHelpers");
const bcrypt = require("bcryptjs");

const router = express.Router();

const restricted = async (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res
      .status(500)
      .json({ error: "Could not validate your login credentials" });
  }
};

router.route("/").get(restricted, async (req, res) => {
  try {
    const users = await db.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Sorry, we couldn't get the users right now" });
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.findBy({ id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Sorry, we can't get that user right now" });
  }
});

module.exports = router;
