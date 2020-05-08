import React, { Component } from 'react';
import { evaluate } from 'mathjs';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			result: '0',
		};
	}

	handleClear = (event) => {
		event.preventDefault();
		this.setState({ input: '', result: '0' });
	};

	handleEqual = (event) => {
		try {
			const result = evaluate(this.state.input);
			this.setState({ input: this.state.input + '=' + result, result });
		} catch (error) {
			this.setState({ input: '', result: 'NA' });
		}
	};

	handleOperate = (event) => {
		event.preventDefault();
		if (event.target.tagName === 'DIV') return;
		this.setState({ input: this.state.input + event.target.textContent });
	};

	render() {
		return (
			<div>
				<div id='display'>
					<p>{this.state.input}</p>
					<p>{this.state.result}</p>
				</div>
				<div id='keypad'>
					<div>
						<button id='clear' onClick={this.handleClear}>
							AC
						</button>
					</div>
					<div id='operation' onClick={this.handleOperate}>
						<div className='col-12'>
							<button id='divide'>/</button>
							<button id='multiply'>x</button>
							<button id='subtract'>-</button>
							<button id='add'>+</button>
						</div>
						<div id='numbers'>
							<button id='one'>1</button>
							<button id='two'>2</button>
							<button id='three'>3</button>
							<button id='four'>4</button>
							<button id='five'>5</button>
							<button id='six'>6</button>
							<button id='seven'>7</button>
							<button id='eight'>8</button>
							<button id='nine'>9</button>
							<button id='zero'>0</button>
							<button id='decimal'>.</button>
						</div>
					</div>
					<div>
						<button id='equals' onClick={this.handleEqual}>
							=
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
