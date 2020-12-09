import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {
	state = {
		saveBooks: [],
	}

	componentDidMount() {
		API.savedBooks()
			.then(saveBooks => this.setState({ saveBooks: saveBooks }))
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div className="container">
				<h2>Saved Books</h2>
				<Results books={this.state.saveBooks} />
			</div>
		)
	}
}

export default Saved;