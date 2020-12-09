import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={{width:"400px", margin:"0 auto"}}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />&nbsp;&nbsp;&nbsp;
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
