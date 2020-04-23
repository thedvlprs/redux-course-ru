export const SET_YEAR = 'SET_YEAR' // положили строку в константу

export function setYear(year) {
	return {
		type: 'SET_YEAR', // изменили строку на константу
		payload: year,
	}
}
