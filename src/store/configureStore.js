import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
// import { ping } from './enhancers/ping' // <-- подключаем наш enhancer
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// удалили "начальное состояние = initial state" т.к. теперь наш редьюсер составной, и нам нужны initialState каждого reducer'а. Это будет сделано автоматически.
export const store = createStore(rootReducer, applyMiddleware(thunk, logger)) // applyMiddleware(ping) <-- добавляем его в цепочку middleware'ов
