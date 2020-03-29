import React from "react";

export default class FeedbackForGuess extends React.Component {
	render() {
		let feedback;

		if (this.props.guessWasCorrect === null) {
			feedback = 'Please guess a number between 1 and 5 :';
		} else if (this.props.guessWasCorrect) {
			feedback = 'Congratulations, you guessed the number correctly! :';
		} else {
			feedback = 'Not quite! Please keep guessing! :';
		}

		return (
			<div>
				{feedback}
			</div>
		);
	}
}