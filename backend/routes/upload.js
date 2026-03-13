const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

const router = express.Router();

// Configura o multer para armazenar em memória (buffer)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }

    // Upload para o Cloudinary a partir do buffer
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'nova-studio',
          resource_type: 'auto', // detecta automaticamente imagem, vídeo, raw (pdf)
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(req.file.buffer);
    });

    // Determina o tipo do arquivo baseado no mimetype
    let fileType = 'image';
    if (req.file.mimetype.startsWith('video/')) {
      fileType = 'video';
    } else if (req.file.mimetype === 'application/pdf') {
      fileType = 'pdf';
    }

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