import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
	render() {
		const { name, lastname, age } = this.props.user
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Мой топ фото</h1>
				</header>
				<p>
					Привет из App, {name} {lastname}!
				</p>
				<p>Тебе уже {age}?</p>
			</div>
		)
	}
}

// приклеиваем данные из store
const mapStateToProps = (store) => {
	console.log(store) // посмотрим, что же у нас в store?
	return {
		user: store.user,
	}
}

// в наш компонент App, с помощью connect(mapStateProps)
export default connect(mapStateToProps)(App)
