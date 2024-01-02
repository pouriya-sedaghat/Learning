// conditional rendering

import { Component } from "react";

class ButtonStatus extends Component {

    state = {
        status: false
    }

    offClick = () => {
        this.setState({ status: false })
    }
    onClick = () => {
        this.setState({ status: true });
    }

    // toggle

    toggleClick = () => {
        this.setState(prev => ({ status: !prev.status }))
    }

    render() {
        return (
            <>
                <span><button onClick={this.offClick}>OFF</button> {this.state.status ? 'ON' : 'OFF'} <button onClick={this.onClick}>ON</button></span>
                <br />
                <button onClick={this.toggleClick}>Toggle : {this.state.status ? 'ON' : 'OFF'}</button>
            </>
        );
    }
}

export default ButtonStatus;