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
            msg: 'Campo nome deve ter entre 4 e 30 caracteres',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 30],
            msg: 'Campo sobrenome deve ter entre 4 e 30 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email ja existe',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
          min: {
            args: [5],
            msg: 'Idade tem que ser maior que 5 anos',
          },
          max: {
            args: [18],
            msg: 'A idade deve ser menor ou igual a 18',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'O peso deve ser um número válido',
          },
          min: {
            args: [1],
            msg: 'O peso deve ser maior que 0',
          },
          max: {
            args: [300],
            msg: 'O peso deve ser menor que 300kg',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false,
        isFloat: {
          msg: 'O peso deve ser um número válido',
        },
        validate: {
          min: {
            args: [0.5],
            msg: 'A altura deve ser maior que 0.5m',
          },
          max: {
            args: [3],
            msg: 'A altura deve ser menor que 3m',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
