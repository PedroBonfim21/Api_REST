import multer from 'multer';
import multerConfig from '../config/multer';
import Picture from '../models/Picture';

const upload = multer(multerConfig).single('picture');

class PictureController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const picture = await Picture.create({ originalname, filename, student_id });

        return res.json(picture);
      } catch (e) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }
    });
  }
}

export default new PictureController();
