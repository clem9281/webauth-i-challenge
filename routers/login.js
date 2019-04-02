// const express = require("express");
// const db = require("../data/dbHelpers");
// const bcrypt = require("bcryptjs");

// const router = express.Router();

// router.route("/").post(async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ error: "Bad request" });
//   }
//   try {
//     const user = await db.findBy({ username }).first();
//     if (!user) return res.status(401).json({ error: "You shall not pass!" });
//     if (bcrypt.compareSync(password, user.password)) {
//       return res.status(200).json({ message: "Successfully logged in" });
//     }
//     return res.status(401).json({ error: "You shall not pass!" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "We were unable to log you in at this time" });
//   }
// });

// module.exports = router;
