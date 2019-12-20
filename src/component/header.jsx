import React from "react";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: "Test Titl"
		};
	}
	render() {
		return <header>this is header Component</header>;
	}
}

export default Header;
