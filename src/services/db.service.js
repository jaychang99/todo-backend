import { createConnection } from 'mysql2/promise';
import dbConfig from '../configs/db.config.js';

async function query(sql, params) {
  const connection = await createConnection(dbConfig);
  const [results,] = await connection.execute(sql, params);
  connection.end() // 커넥션을 명시적으로 닫아주지 않으니 max connection error 뜸. 

  return results;
}

export default {
  query
}