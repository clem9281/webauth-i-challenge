const express = require("express");
const db = require("../data/dbHelpers");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.route("/register").post(async (req, res) => {
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

router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Bad request" });
  }
  try {
    const user = await db.findBy({ username }).first();
    if (!user) return res.status(401).json({ error: "You shall not pass!" });
    if (bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      return res.status(200).json({ message: "Successfully logged in" });
    }
    return res.status(401).json({ error: "You shall not pass!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "We were unable to log you in at this time" });
  }
});

router.route("/logout").get(async (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ error: "We were unable to log you out" });
      } else {
        res.status(200).json({ message: "Thanks for visiting" });
      }
    });
  } else {
    res.status(200).json({ message: "Thanks for visiting!" });
  }
});

module.exports = router;
