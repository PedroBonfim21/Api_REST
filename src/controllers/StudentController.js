import Student from '../models/Student';
import Picture from '../models/Picture';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
      order: [['id', 'DESC'], [Picture, 'id', 'DESC']],
      include: {
        model: Picture,
        attributes: ['id', 'filename', 'originalname'],
      },
    });
    res.json(students);
  }

  async create(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.json(newStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [Picture, 'id', 'DESC']],
        include: {
          model: Picture,
          attributes: ['id', 'filename', 'originalname'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      const newDataStudent = await student.update(req.body);
      return res.json(newDataStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }
      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      await student.destroy();
      return res.json({
        msg: 'Student deletado da BD',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
