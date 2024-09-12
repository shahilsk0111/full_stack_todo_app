const {Router}= require("express");
const { getTodo, saveTodo, deleteTodo, updateTodo } = require("../controllers/ToDoControllers");

const router = Router();

router.get('/',getTodo)
router.post('/save',saveTodo)
router.post('/update', updateTodo)
router.post('/delete',deleteTodo)

module.exports = router