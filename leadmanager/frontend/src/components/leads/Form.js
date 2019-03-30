import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createLead } from "../../actions/leads";

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	static propTypes = {
		createLead: PropTypes.func.isRequired
	};

	onChange = e => this.setState({ [e.target.name ]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		const { name, email, message } = this.state;
		const lead = { name, email, message };
		this.props.createLead(lead);
	};

	render() {
		const { name, email, message } = this.state;
		return (
			<div className="card card-body mt-4 mb-4">
				<h1>Add Lead</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input
							className="form-control"
							type="text"
							name="name"
							onChange={this.onChange}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							className="form-control"
							type="email"
							name="email"
							onChange={this.onChange}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Message</label>
						<input
							className="form-control"
							type="text"
							name="message"
							onChange={this.onChange}
							value={message}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, { createLead })(Form)