import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
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
      const student = await Student.findByPk(req.params.id);

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
