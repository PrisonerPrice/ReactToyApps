import React from 'react';
import FeedbackForGuess from "./FeedbackForGuess";

export default class GuessingGame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			theNumber: this.getRandomInt(5),
			currentGuess: null,
			guessWasCorrect: null
		};
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.ceil(max)) + 1;
	}

	guessChanged(event) {
		this.setState({
			currentGuess: event.target.value
		});
	}

	checkGuess() {
		const guessWasCorrect = parseInt(this.state.currentGuess) === this.state.theNumber;
		this.setState({
			guessWasCorrect
		});
	}

	render() {
		return (
			<div>
				<input onChange={(event) => this.guessChanged(event)}/>
				<button onClick={() => this.checkGuess()}>Submit Guess</button>
				<FeedbackForGuess guessWasCorrect={this.state.guessWasCorrect}/>
			</div>
		);
	}
}