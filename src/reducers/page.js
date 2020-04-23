import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions'

const initialState = {
	year: 2020,
	photos: [],
	isFetching: false, // изначально статус загрузки - false т.к. он станет true, когда запрос начнет выполнние
}

export function pageReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PHOTOS_REQUEST:
			return { ...state, year: action.payload, isFetching: true }

		case GET_PHOTOS_SUCCESS:
			return { ...state, photos: action.payload, isFetching: false }

		default:
			return state
	}
}
