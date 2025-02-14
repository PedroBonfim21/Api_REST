import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid User'],
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Invalid password'],
      });
    }

    const { TOKEN_SECRET } = process.env;
    const { TOKEN_EXP } = process.env;
    const { id } = user;
    const token = jwt.sign({ id, email }, TOKEN_SECRET, {
      expiresIn: TOKEN_EXP,
    });

    return res.json({ token });
  }
}

export default new TokenController();
