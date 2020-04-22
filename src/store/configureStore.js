import { createStore } from 'redux'
import { rootReducer } from '../reducers'

// удалили "начальное состояние = initial state" т.к. теперь наш редьюсер составной, и нам нужны initialState каждого reducer'а. Это будет сделано автоматически.
export const store = createStore(rootReducer)
