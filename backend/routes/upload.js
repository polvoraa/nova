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

    // Determina o tipo de recurso e o tipo de arquivo
    let resourceType = 'auto';
    let fileType = 'image';

    if (req.file.mimetype.startsWith('video/')) {
      resourceType = 'video';
      fileType = 'video';
    } else if (req.file.mimetype === 'application/pdf') {
      resourceType = 'raw'; // força raw para PDF
      fileType = 'pdf';
    } else if (req.file.mimetype.startsWith('image/')) {
      resourceType = 'image';
      fileType = 'image';
    }

    // Upload para o Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'nova-studio',
          resource_type: resourceType,
          public_id: req.file.originalname.split('.')[0] // opcional: remove extensão
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(req.file.buffer);
    });

    // A URL retornada em result.secure_url já é a correta para o tipo raw?
    // Para raw, a URL será algo como: https://res.cloudinary.com/<cloud>/raw/upload/...
    // Para garantir, podemos construir a URL manualmente ou confiar no result.
    // Vamos usar a URL como está.

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