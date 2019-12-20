import React from "react";
import ContentEditable from "react-contenteditable";
import "./__editor.main.sass";
class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			htmlContent: "<div>asd</div>"
		};
	}

	render() {
		return (
			<div>
				<ContentEditable
					html={this.state.htmlContent}
					tagName="pre"
					id="editor"
					className="editor"
					onBlur={console.log("asdas")}
				/>
			</div>
		);
	}
}

export default Editor;
