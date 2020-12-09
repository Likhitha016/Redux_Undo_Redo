import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos) => {
      return todos
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present)
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
