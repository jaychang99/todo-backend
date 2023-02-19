import db from './db.service.js';

async function getMultiple(page = 1) {
  const rows = await db.query(
    `select * from todo;`,
  );

  return { result: rows, message: "successfully retrieved todos data" }
}

async function create(data) {

  // data 가 없으면
  if (!data) {
    return { message: "data is empty" }
  }

  if (!data.name) {
    return { message: "name field is empty" }
  }


  const result = await db.query(
    `INSERT INTO todo
    (name, due) 
    VALUES 
    (?, ?)`,
    [
      data.name,
      data.due ?? null,
    ]
  );

  return {
    id: result.insertId, // todo 고유 ID
    name: data.name, //  todo 이름
    message: "successfully created todo"
  };
}
async function update(id, body) {

  try {

    const result = await db.query(
      `UPDATE todo SET name=?, is_completed=? WHERE id=?`,
      [
        body.name, body.isCompleted, id
      ]
    );

    // 없는 todo id 로 요청을 준 경우
    if (result.affectedRows === 0) {
      return { message: "todo with given ID does not exist" }
    }

    return {
      id: id, // 업데이트한 todo의 고유 ID
      name: body.name, // 업데이트된 todo 이름
      team_id: body.isCompleted, // 업데이트된 todo의 todo ID
      message: "successfully updated todo"
    };

  } catch (error) {
    return { message: "error" }
  }
}


async function remove(id) {
  const result = await db.query(
    `DELETE FROM todo WHERE id=?`,
    [
      id
    ]
  );

  // 없는 todo id 로 요청을 준 경우
  if (result.affectedRows === 0) {
    return { message: "todo with given ID does not exist" }
  }
  return { message: "todo removed" }
}

export default {
  getMultiple,
  create,
  update,
  remove
}