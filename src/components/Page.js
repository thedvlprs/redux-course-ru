import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
	onBtnClick = (e) => {
		const year = +e.currentTarget.innerText
		this.props.setYear(year)
	}
	render() {
		const { year, photos } = this.props
		return (
			<div>
				<div>
					<button onClick={this.onBtnClick}>2019</button>
					<button onClick={this.onBtnClick}>2020</button>
				</div>
				<p>
					У тебя {photos.length} фото за {year} год
				</p>
			</div>
		)
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	setYear: PropTypes.func.isRequired, // добавили новое свойство в propTypes
}
