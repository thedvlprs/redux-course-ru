import { SET_YEAR } from '../actions/PageActions'

const initialState = {
	year: 2020,
	photos: [],
}

export function pageReducer(state = initialState, action) {
	switch (action.type) {
		case SET_YEAR: // изменили строку на константу
			return { ...state, year: action.payload }

		default:
			return state
	}
}
