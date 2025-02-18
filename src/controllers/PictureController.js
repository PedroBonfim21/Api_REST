import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('picture');

class PictureController {
  async create(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      return res.json({
        message: 'Imagem armazenada com sucesso!',
        file: req.file.filename, // Retorna o nome do arquivo salvo
      });
    });
  }
}

export default new PictureController();
