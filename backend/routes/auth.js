const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

// REGISTRO
router.post("/register", async (req, res) => {

  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = new User({
      email: req.body.email,
      password: hashedPassword
    })

    await user.save()

    res.json(user)

  } catch (err) {

    res.status(500).json(err)

  }

})


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(400).json("Usuário não encontrado")
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!validPassword) {
      return res.status(400).json("Senha inválida")
    }

    const token = jwt.sign(
      { id: user._id },
      "novastudiosecret"
    )

    res.json({ token })

  } catch (err) {

    res.status(500).json(err)

  }

})

module.exports = router