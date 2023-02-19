import dotenv from "dotenv"

dotenv.config()

const env = process.env;
const dbConfig = {
  connectionLimit: 1,
  connectTimeout: 10 * 1000,
  timezone: 'Asia/Seoul',
  host: env.MYSQL_HOST,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE || 'programming_languages',
  port: env.MYSQL_PORT || 3306,
};

export default dbConfig;