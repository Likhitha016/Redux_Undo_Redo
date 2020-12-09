import { combineReducers } from 'redux'
import todos from './todos'
import {createUndoHistoryReducer} from 'redux-undo-redo'
const UNDO_HISTORY_LIMIT = 2

const todoApp = combineReducers({
  todos:todos,
  // undoHistory: createUndoHistoryReducer(UNDO_HISTORY_LIMIT)
})

export default todoApp
