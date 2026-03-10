const express = require("express")
const router = express.Router()

const Project = require("../models/Project")

// criar projeto
router.post("/", async (req,res)=>{

try{

const project = new Project(req.body)

await project.save()

res.json(project)

}catch(err){

res.status(500).json({error:err.message})

}

})

// listar projetos
router.get("/", async (req,res)=>{

try{

const projects = await Project.find().sort({createdAt:-1})

res.json(projects)

}catch(err){

res.status(500).json({error:err.message})

}

})

// deletar projeto
router.delete("/:id", async (req,res)=>{

try{

await Project.findByIdAndDelete(req.params.id)

res.json({message:"Projeto deletado"})

}catch(err){

res.status(500).json({error:err.message})

}

})

module.exports = router