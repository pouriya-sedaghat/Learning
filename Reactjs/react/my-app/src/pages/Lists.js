import { Component } from "react";

class Lists extends Component {

    state = {
        users: [{ name: 'pouriya', family: 'sedaghat', id: 1 }, { name: 'zahra', family: 'sedaghat', id: 2 }, { name: 'hossein', family: 'sedaghat', id: 3 }]
    }

    render() {
        return (
            <>
                <h2>Lists Page</h2>
                <ul>
                    {
                        this.state.users.map((item, index) => {
                            return (
                                <>
                                    <li key={item.id.toString()}>{item.name} {item.family}</li>
                                </>
                            );
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Lists;