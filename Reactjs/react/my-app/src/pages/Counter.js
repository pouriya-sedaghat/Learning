// use event

import { Component } from "react";
import convertor from 'number-to-words';

class Counter extends Component {

    state = {
        counter: 0,
        isDead: false
    }

    // in class componenet
    // this in declaration and experession not return to function

    minusHandler() {
        this.setState((prevState) => ({ counter: --prevState.counter }));
    }
    // pluseHandler = function () {
    //     this.setState((prevState) => ({ counter: ++prevState.counter }));
    // }

    // this in arrow function return to function

    pluseHandler = () => {
        this.setState((prevState) => ({ counter: ++prevState.counter }))
    }

    render() {
        return (
            <>
                <h2>Counter Page</h2>
                <span><button onClick={this.minusHandler.bind(this)}>-</button> <span>Counter: {this.state.counter} {convertor.toWords(this.state.counter)}</span> <button onClick={this.pluseHandler}>+</button></span>
            </>
        );
    }
}

export default Counter;