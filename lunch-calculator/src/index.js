import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
			shareItem: 0,
			sum: 0,
			addOnOriginal: 0,
			adding: 0,
			addsOnSum: 0,
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
		if (code === 4) this.setState({
			shareItem: event.target.value,
		})
	}

	updateAddOns(event, code) {
		if (code === 0) this.setState({
			addOnOriginal: event.target.value,
		});
		if (code === 1) this.setState({
			adding: event.target.value,
		});
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
		var shareIndividual = 0;
		if(this.state.BianMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.BianMoney);
		}
		if(this.state.ChenMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.ChenMoney);
		}
		if(this.state.ZhuMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.ZhuMoney);
		}
		if(this.state.ZhangMoney != null) {
			total = parseFloat(total) + parseFloat(this.state.ZhangMoney);
		}
		if(this.state.shareItem != null) {
			total = parseFloat(total) + parseFloat(this.state.shareItem);
			shareIndividual = parseFloat(this.state.shareItem) / 4;
		}
		BianRatio = (parseFloat(this.state.BianMoney) + parseFloat(shareIndividual)) / total;
		ChenRatio = (parseFloat(this.state.ChenMoney) + parseFloat(shareIndividual)) / total;
		ZhuRatio = (parseFloat(this.state.ZhuMoney) + parseFloat(shareIndividual)) / total;
		ZhangRatio = (parseFloat(this.state.ZhangMoney) + parseFloat(shareIndividual)) / total;
		this.setState({
			BianPay: (BianRatio * this.state.sum).toPrecision(4),
			ChenPay: (ChenRatio * this.state.sum).toPrecision(4),
			ZhuPay: (ZhuRatio * this.state.sum).toPrecision(4),
			ZhangPay: (ZhangRatio * this.state.sum).toPrecision(4),
		});
	}

	calculateAddsOn() {
		var newOriginal = parseFloat(this.state.addOnOriginal) + parseFloat(this.state.adding);
		this.setState({
			addOnOriginal: newOriginal,
		})
	}
	
		
	render() {
		return (
			<div>
			<Container fluid className="containerStyle">
			<Row><h2>Lunch Calculator</h2></Row>
			<Row>
				<Col xs={4}>
					<Row>
						<Col xs={5}><h3>Bian</h3></Col>
						<Col xs={4}><input onChange={(event) => this.updateSingle(event, 0)}/></Col>
					</Row>
					<Row className="rowMargin">
						<Col xs={5}><h3>Chen</h3></Col>
						<Col xs={4}><input onChange={(event) => this.updateSingle(event, 1)}/></Col>
					</Row>
					<Row className="rowMargin">
						<Col xs={5}><h3>Zhu</h3></Col>
						<Col xs={4}><input onChange={(event) => this.updateSingle(event, 2)}/></Col>
					</Row>
					<Row className="rowMargin">
						<Col xs={5}><h3>Zhang</h3></Col>
						<Col xs={4}><input onChange={(event) => this.updateSingle(event, 3)}/></Col>
					</Row>
					<Row className="rowMargin">
						<Col xs={5}><h3>Shared</h3></Col>
						<Col xs={4}><input onChange={(event) => this.updateSingle(event, 4)}/></Col>
					</Row>
					<Row className="rowMargin">
						<Col xs={5}><h3>Total</h3></Col>
						<Col xs={4}><input onChange={(event) => this.updateSum(event)}/><br/></Col>
					</Row>
					<Button className="btnMargin" onClick={() => this.calculate()}>Calculate</Button>
				</Col>
				<Col xs={4}>
					<h3>Bian should pay {this.state.BianPay} dollars</h3>
					<h3 className="rowMargin">Chen should pay {this.state.ChenPay} dollars</h3>
					<h3 className="rowMargin">Zhu should pay {this.state.ZhuPay} dollars</h3>
					<h3 className="rowMargin">Zhang should pay {this.state.ZhangPay} dollars</h3>
				</Col>
				<Col xs={4}>
					<h3>Adds-On Calculator</h3>
					<h3>Before:</h3>
					<input onChange={(event) => this.updateAddOns(event, 0)}/>
					<h3 className="rowMargin">Adds-On:</h3>
					<input onChange={(event) => this.updateAddOns(event, 1)}/><br/>
					<Button className="btnMargin2" onClick={() => this.calculateAddsOn()}>Calculate</Button>
					<h3>Adds-On total is: {this.state.addOnOriginal} dollars</h3>
				</Col>
			</Row>
			</Container>
			</div>
		);
	}
}

ReactDOM.render(
  <Input />,
  document.getElementById('root')
);