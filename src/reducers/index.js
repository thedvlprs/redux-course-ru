export const initialState = {
	user: {
		// вложили в user вместо строки, объект
		name: 'Jane',
		lastname: 'Doe',
		age: 18,
	},
}

export function rootReducer(state = initialState) {
	return state
}
