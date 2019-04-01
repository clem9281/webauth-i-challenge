const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Bad request" });
  try {
  } catch (error) {}
});

module.exports = router;
