import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./home";
import Editor from "./editor/editorMain";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/editor" component={Editor} />
			</Switch>
		);
	}
}

export default Main;
