// in class component

// import { Component } from "react";
// // import './ToDo.module.scss';

// class ToDo extends Component {

//     render() {
//         return (
//             <>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col">
//                             <h2 className="text-primary">ToDo Page</h2>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default ToDo;

// import { Component } from "react";
// import { ContainerFluid, Row, Col } from './Responsive';

// class ToDo extends Component {

//     render() {
//         return (
//             <>
//                 <ContainerFluid classes='pouriya' title='hello' style={{ backgroundColor: 'red' }}>
//                     <Row>
//                         <Col classes='harchi' breakPoint='sm' size={12}>
//                             <h2 className="text-primary">ToDo Page</h2>
//                         </Col>
//                     </Row>
//                 </ContainerFluid>
//             </>
//         );
//     }
// }

// export default ToDo;

// import { Component } from "react";
// import { Container, Row, Col } from 'reactstrap';

// class ToDo extends Component {

//     state = {
//         users: [{ name: 'pouriya', family: 'sedaghat' }, { name: 'zahra', family: 'sedaghat' }, { name: 'hossein', family: 'sedaghat' }],
//         name: '',
//         family: ''
//     }

//     onChangeName = (e) => {
//         this.setState({ name: e.target.value });
//     }

//     onChangeFamily = (e) => {
//         this.setState({ family: e.target.value });
//     }

//     onChangeValue = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     submitHandle = (e) => {
//         e.preventDefault();

//         const name = this.state.name;
//         const family = this.state.family;
//         this.setState(prev => {
//             const users = [...prev.users];
//             users.push({ name, family });
//             return {
//                 users
//             }
//         })
//     }

//     deleteHandle = (index) => {
//         this.setState(prev => {
//             const users = [...prev.users];
//             users.splice(index, 1);
//             return {
//                 users
//             }
//         })
//     }

//     editHandle = (index) => {

//         const name = window.prompt('Enter Your Name :');
//         const family = window.prompt('Enter Your Family :');

//         this.setState(prev => {
//             const users = [...prev.users];
//             users.splice(index, 1, { name, family });
//             return {
//                 users
//             }
//         })
//     }

//     render() {
//         return (
//             <>
//                 {/* <Container fluid>
//                     <Row>
//                         <Col sm={12} className="text-center">
//                             <h2 className="text-primary">ToDo Page</h2>
//                         </Col>
//                     </Row>
//                 </Container> */}

//                 <Container fluid>
//                     <Row>
//                         <Col sm={12}>
//                             <h2 className="text-primary">ToDo Page</h2>

//                             {/* <form className="my-2" onSubmit={this.submitHandle}>
//                                 <input type="text" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} placeholder="name" className="bg-light" />
//                                 <input type="text" onChange={(e) => this.setState({ family: e.target.value })} value={this.state.family} placeholder="family" className="bg-light" />
//                                 <button className="bg-success">submit</button>
//                             </form> */}

//                             {/* <form className="my-2" onSubmit={this.submitHandle}>
//                                 <input type="text" onChange={this.onChangeName} name="name" value={this.state.name} placeholder="name" className="bg-light" />
//                                 <input type="text" onChange={this.onChangeFamily} name="family" value={this.state.family} placeholder="family" className="bg-light" />
//                                 <button className="bg-success">submit</button>
//                             </form> */}

//                             <form className="my-2" onSubmit={this.submitHandle}>
//                                 <input type="text" onChange={this.onChangeValue} name="name" value={this.state.name} placeholder="name" className="bg-light" />
//                                 <input type="text" onChange={this.onChangeValue} name="family" value={this.state.family} placeholder="family" className="bg-light" />
//                                 <button className="bg-success">submit</button>
//                             </form>

//                             <table className="table table-border table-dark table-hover table-striped text-center">
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Family</th>
//                                         <th>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         this.state.users.map((item, index) => {
//                                             return (
//                                                 <>
//                                                     <tr key={index.toString()}>
//                                                         <td>{item.name}</td>
//                                                         <td>{item.family}</td>
//                                                         <td><button onClick={this.editHandle.bind(null, index)} className="btn btn-warning mx-1">Edit</button><button onClick={this.deleteHandle.bind(null, index)} className="btn btn-danger mx-1">Delete</button></td>
//                                                     </tr>
//                                                 </>
//                                             );
//                                         })
//                                     }
//                                 </tbody>
//                             </table>
//                         </Col>
//                     </Row>
//                 </Container>
//             </>
//         );
//     }
// }

// export default ToDo;

// in functional component

// in class component

// import { Component } from "react";
// // import './ToDo.module.scss';

// class ToDo extends Component {

//     render() {
//         return (
//             <>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col">
//                             <h2 className="text-primary">ToDo Page</h2>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default ToDo;

// import { Component } from "react";
// import { ContainerFluid, Row, Col } from './Responsive';

// class ToDo extends Component {

//     render() {
//         return (
//             <>
//                 <ContainerFluid classes='pouriya' title='hello' style={{ backgroundColor: 'red' }}>
//                     <Row>
//                         <Col classes='harchi' breakPoint='sm' size={12}>
//                             <h2 className="text-primary">ToDo Page</h2>
//                         </Col>
//                     </Row>
//                 </ContainerFluid>
//             </>
//         );
//     }
// }

// export default ToDo;

import { useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

// use custom hook

import { useOnChangeHandel } from "hooks/useOnChangeHandle";

function ToDo() {

    const [users, setUsers] = useState([{ name: 'pouriya', family: 'sedaghat' }, { name: 'zahra', family: 'sedaghat' }, { name: 'hossein', family: 'sedaghat' }]);
    const [name, setName, changeName] = useOnChangeHandel('');
    const [family, setFamily, changeFamily] = useOnChangeHandel('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeFamily = (e) => {
        setFamily(e.target.value);
    }

    const submitHandle = (e) => {
        e.preventDefault();

        setUsers(prev => {
            const users = [...prev];
            users.push({ name, family });
            return users;
        })
    }

    const deleteHandle = (index) => {
        setUsers(prev => {
            const users = [...prev];
            users.splice(index, 1);
            return users;
        })
    }

    const editHandle = (index) => {

        const name = window.prompt('Enter Your Name :');
        const family = window.prompt('Enter Your Family :');

        setUsers(prev => {
            const users = [...prev];
            users.splice(index, 1, { name, family });
            return users;
        })
    }

    // dynamic link

    const ids = [1, 2, 3, 4, 5];

    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <h2 className="text-primary">ToDo Page</h2>

                        <Link className="d-block" to='/todo/lists'>Lists Page</Link>
                        {
                            ids.map((item, index) => (<Link className="d-block" key={index.toString()} to={`/todo/${item}`}>Dynamic Axios {item}</Link>))
                        }

                        {/* <form className="my-2" onSubmit={submitHandle}>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="name" className="bg-light" />
                            <input type="text" onChange={(e) => setFamily(e.target.value)} value={family} placeholder="family" className="bg-light" />
                            <button className="bg-success">submit</button>
                        </form> */}

                        {/* <form className="my-2" onSubmit={submitHandle}>
                            <input type="text" onChange={onChangeName} value={name} placeholder="name" className="bg-light" />
                            <input type="text" onChange={onChangeFamily} value={family} placeholder="family" className="bg-light" />
                            <button className="bg-success">submit</button>
                        </form> */}

                        {/* custom hook */}

                        <form className="my-2" onSubmit={submitHandle}>
                            <input type="text" onChange={changeName} value={name} placeholder="name" className="bg-light" />
                            <input type="text" onChange={changeFamily} value={family} placeholder="family" className="bg-light" />
                            <button className="bg-success">submit</button>
                        </form>

                        <table className="table table-border table-dark table-hover table-striped text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Family</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index.toString()}>
                                                    <td>{item.name}</td>
                                                    <td>{item.family}</td>
                                                    <td><button onClick={editHandle.bind(null, index)} className="btn btn-warning mx-1">Edit</button><button onClick={deleteHandle.bind(null, index)} className="btn btn-danger mx-1">Delete</button></td>
                                                </tr>
                                            </>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


export default ToDo;

// componnentDidUpdate(){} in class component