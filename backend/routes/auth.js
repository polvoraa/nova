const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// REGISTRO (mantido igual)
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN (alterado para usar JWT_SECRET do ambiente)
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("Usuário não encontrado");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json("Senha inválida");
    }

    // Usa a variável de ambiente JWT_SECRET
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } // recomendado adicionar expiração
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;