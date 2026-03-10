const express = require("express")
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const cloudinary = require("../config/cloudinary")

const router = express.Router()

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "nova-studio",
    allowed_formats: ["jpg","png","jpeg","webp"]
  }
})

const upload = multer({ storage })

router.post("/", (req,res)=>{

upload.single("image")(req,res,(err)=>{

if(err){
console.error("ERRO UPLOAD:", err)
return res.status(500).json({error:err.message})
}

if(!req.file){
return res.status(400).json({error:"Nenhuma imagem enviada"})
}

res.json({
url:req.file.path
})

})

})

module.exports = router