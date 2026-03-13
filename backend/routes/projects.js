const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth"); // ajuste conforme seu middleware de autenticação

// GET todos os projetos (público)
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST criar novo projeto (protegido)
router.post("/", auth, async (req, res) => {
  const { title, description, category, link, fileUrl, fileType } = req.body;

  if (!title || !description || !category || !fileUrl || !fileType) {
    return res.status(400).json({ message: "Campos obrigatórios faltando" });
  }

  try {
    const newProject = new Project({
      title,
      description,
      category,
      link,
      fileUrl,
      fileType
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET um projeto por ID (opcional, público)
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Projeto não encontrado" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT atualizar projeto (protegido)
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProject) return res.status(404).json({ message: "Projeto não encontrado" });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE remover projeto (protegido)
router.delete("/:id", auth, async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: "Projeto não encontrado" });
    res.json({ message: "Projeto removido" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;