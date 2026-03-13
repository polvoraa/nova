const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "nova-studio",
    allowed_formats: ["jpg", "png", "jpeg", "webp", "mp4", "mov", "pdf"],
    resource_type: "auto" // essencial para vídeos
  }
});

const upload = multer({ storage });

router.post("/", (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      console.error("ERRO UPLOAD:", err);
      return res.status(500).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado" });
    }

    // Determinar o tipo com base no mimetype
    let fileType = 'image';
    if (req.file.mimetype.startsWith('video/')) {
      fileType = 'video';
    } else if (req.file.mimetype === 'application/pdf') {
      fileType = 'pdf';
    }

    res.json({
      url: req.file.path,
      fileType: fileType
    });
  });
});

module.exports = router;