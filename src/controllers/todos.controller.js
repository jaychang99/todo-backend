import todosService from '../services/todos.service.js'

async function get(req, res, next) {
  try {
    res.json(await todosService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting todos`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await todosService.create(req.body));
  } catch (err) {
    console.error(`Error while creating todo`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await todosService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating todo`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await todosService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting todo`, err.message);
    next(err);
  }
}

export {
  get,
  create,
  update,
  remove
};
