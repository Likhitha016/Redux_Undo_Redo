import React from 'react'
import AddTodo from '../src/components/AddTodo'
import UndoRedo from '../src/components/UndoRedo'
import VisibleTodoList from '../src/components/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />&nbsp;&nbsp;&nbsp;
    <VisibleTodoList />&nbsp;&nbsp;&nbsp;
    <UndoRedo />
  </div>
)

export default App