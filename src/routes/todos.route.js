import { Router } from 'express';
import { get, create, update, remove } from '../controllers/todos.controller.js';


const todosRouter = Router();

todosRouter.get('/', get);

todosRouter.post('/', create);

todosRouter.put('/:id', update);

todosRouter.delete('/:id', remove);

export default todosRouter;