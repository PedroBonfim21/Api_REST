import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 30],
            msg: 'Name field must be between 4 and 30 characters',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 30],
            msg: 'Surname field must have between 4 and 30 characters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already exists',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Age must be a whole number',
          },
          min: {
            args: [5],
            msg: 'Age must be greater than 5 years',
          },
          max: {
            args: [18],
            msg: 'Age must be less than or equal to 18',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'Weight must be a valid number',
          },
          min: {
            args: [1],
            msg: 'Weight must be greater than 0Kg',
          },
          max: {
            args: [300],
            msg: 'Weight must be less than 300Kg',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false,
        isFloat: {
          msg: 'Height must be a valid number',
        },
        validate: {
          min: {
            args: [0.5],
            msg: 'Height must be greater than 0.5M',
          },
          max: {
            args: [3],
            msg: 'Height must be less than 3M',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'student_id' });
  }
}
