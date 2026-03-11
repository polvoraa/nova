const express = require("express")
const router = express.Router()

const Project = require("../models/Project")

// CACHE EM MEMÓRIA
let cachedProjects = null
let lastFetch = 0
const CACHE_TIME = 1000 * 60 * 5 // 5 minutos

// ===============================
// CRIAR PROJETO
// ===============================
router.post("/", async (req, res) => {

  try {

    const project = new Project(req.body)

    await project.save()

    // limpa cache
    cachedProjects = null

    res.json(project)

  } catch (err) {

    res.status(500).json({ error: err.message })

  }

})


// ===============================
// LISTAR PROJETOS
// ===============================
router.get("/", async (req, res) => {

  try {

    const now = Date.now()

    // se o cache existir e não estiver expirado
    if (cachedProjects && (now - lastFetch < CACHE_TIME)) {
      return res.json(cachedProjects)
    }

    const projects = await Project
      .find()
      .sort({ createdAt: -1 })
      .lean()

    // salva no cache
    cachedProjects = projects
    lastFetch = now

    res.json(projects)

  } catch (err) {

    res.status(500).json({ error: err.message })

  }

})


// ===============================
// DELETAR PROJETO
// ===============================
router.delete("/:id", async (req, res) => {

  try {

    await Project.findByIdAndDelete(req.params.id)

    // limpa cache
    cachedProjects = null

    res.json({ message: "Projeto deletado" })

  } catch (err) {

    res.status(500).json({ error: err.message })

  }

})

module.exports = router