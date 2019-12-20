import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			components: {
				leftSideL: null
			}
		};
	}
	render() {
		return (
			<div>
				<Header />
				<BrowserRouter>
					<Main />
				</BrowserRouter>
				<Footer />
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
