import React from "react";

class Assign extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            showParagraph: false
        }
    }
    render() {
        return (
            <div>
                <textarea
                    value={this.state.input}
                    onChange={(event) => this.setState({ input: event.target.value })}
                />
                <br />
                <button
                    onClick={() => {
                        this.setState({
                            showParagraph: !this.state.showParagraph
                        })
                    }}>
                    Display in UpperCase.
                </button>
                {this.state.showParagraph && <p>{this.state.input.toUpperCase()}</p>}
            </div>
        )
    }
}

export default Assign