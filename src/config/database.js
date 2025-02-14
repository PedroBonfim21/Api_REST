require('dotenv').config();

const { DB_NAME } = process.env;
const { DB_HOST } = process.env;
const { DB_PORT } = process.env;
const { DB_USERNAME } = process.env;
const { DB_PASSWORD } = process.env;

module.exports = {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
