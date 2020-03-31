import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			BianMoney: 0,
			ChenMoney: 0,
			ZhuMoney: 0,
			ZhangMoney: 0,
			BianPay: 0,
			ChenPay: 0,
			ZhuPay: 0,
			ZhangPay: 0,
			sum: 0
		};
	}
	
	updateSingle(event, code) {
		if (code === 0) this.setState({
			BianMoney: event.target.value,
		});
		if (code === 1) this.setState({
			ChenMoney: event.target.value,
		});
		if (code === 2) this.setState({
			ZhuMoney: event.target.value,
		})
		if (code === 3) this.setState({
			ZhangMoney: event.target.value,
		})
	}
	
	updateSum(event) {
		this.setState({
			sum: event.target.value,
		})
	}
	
	calculate() {
		var total = 0;
		var BianRatio = 0;
		var ChenRatio = 0;
		var ZhuRatio = 0;
		var ZhangRatio = 0;
		if(this.state.BianMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.BianMoney);
		}
		if(this.state.ChenMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.ChenMoney);
		}
		if(this.state.ZhuMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.ZhangMoney);
		}
		if(this.state.ZhangMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.ZhangMoney);
		}
		BianRatio = this.state.BianMoney / total;
		ChenRatio = this.state.ChenMoney / total;
		ZhuRatio = this.state.ZhuMoney / total;
		ZhangRatio = this.state.ZhangMoney / total;
		this.setState({
			BianPay: (BianRatio * this.state.sum).toPrecision(4),
			ChenPay: (ChenRatio * this.state.sum).toPrecision(4),
			ZhuPay: (ZhuRatio * this.state.sum).toPrecision(4),
			ZhangPay: (ZhangRatio * this.state.sum).toPrecision(4),
		});
	}
	
		
	render() {
		return (
			<div>
				<h1>Bian</h1>
				<input onChange={(event) => this.updateSingle(event, 0)}/>
				<h1>Chen</h1>
				<input onChange={(event) => this.updateSingle(event, 1)}/>
				<h1>Zhu</h1>
				<input onChange={(event) => this.updateSingle(event, 2)}/>
				<h1>Zhang</h1>
				<input onChange={(event) => this.updateSingle(event, 3)}/>
				<h1>Total</h1>
				<input onChange={(event) => this.updateSum(event)}/><br/>
				
				<button onClick={() => this.calculate()}>Calculate</button>
				
				<h2>Bian should pay {this.state.BianPay} dollars</h2>
				<h2>Chen should pay {this.state.ChenPay} dollars</h2>
				<h2>Zhu should pay {this.state.ZhuPay} dollars</h2>
				<h2>Zhang should pay {this.state.ZhangPay} dollars</h2>
			</div>
		);
	}
}

ReactDOM.render(
  <Input />,
  document.getElementById('root')
);