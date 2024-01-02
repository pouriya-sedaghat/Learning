// function Clock() {

//     const date = new Date();

//     return (
//         <>
//             <h2>Clock page</h2>
//             <p>hour : {date.toLocaleTimeString()}</p>
//         </>
//     );
// }

// export default Clock;

// import React from 'react';

// class Clock extends React.Component {
//     render() {
//         return (
//             <>
//                 <h2>Class Component</h2>
//             </>
//         );
//     }
// }

// export default Clock;

// import { Component } from 'react';

// class Clock extends Component {
//     render() {
//         return (
//             <>
//                 <h2>Class Component</h2>
//             </>
//         );
//     }
// }

// export default Clock;

// clock

import { Component } from 'react';

class Clock extends Component {

    // date = new Date().toLocaleTimeString()

    // render() {
    //     return (
    //         <>
    //             <h2>Clock Page</h2>
    //             <p>Hour : {this.date}</p>
    //         </>
    //     );
    // }

    state = {
        date: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        setInterval(() => {
            // this.state.date = new Date().toLocaleTimeString(); // no update state

            this.setState({ date: new Date().toLocaleTimeString() });
        }, 1000)
    }

    render() {
        return (
            <>
                <h2>Clock Page</h2>
                <p>Hour : {this.state.date}</p>
            </>
        );
    }
}

export default Clock;