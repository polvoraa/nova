const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 } // 50 MB
});

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }

    // Determina o tipo de recurso no Cloudinary
    let resourceType = 'auto';
    if (req.file.mimetype === 'application/pdf') {
      resourceType = 'raw'; // força raw para PDF
    } else if (req.file.mimetype.startsWith('video/')) {
      resourceType = 'video';
    } else if (req.file.mimetype.startsWith('image/')) {
      resourceType = 'image';
    }

    // Upload para o Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'nova-studio',
          resource_type: resourceType,
          public_id: req.file.originalname.split('.')[0] // opcional
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(req.file.buffer);
    });

    // Define o tipo do arquivo para o frontend
    let fileType = 'image';
    if (req.file.mimetype.startsWith('video/')) {
      fileType = 'video';
    } else if (req.file.mimetype === 'application/pdf') {
      fileType = 'pdf';
    }

    // Para PDF, usamos a URL raw, que geralmente é a mesma, mas garantimos
    // que estamos enviando a URL correta (result.secure_url já é a raw se resource_type for raw)
    res.json({
      url: result.secure_url,
      fileType: fileType
    });
  } catch (err) {
    console.error('❌ Erro no upload:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;