import { useEffect, useState } from 'react';
import { useOnChangeHandel } from 'hooks/useOnChangeHandle';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Axios() {

    const [users, setUsers] = useState([]);

    const [name, setName, onChangeName] = useOnChangeHandel('');
    const [family, setFamily, onChangeFamily] = useOnChangeHandel('');
    const [age, setAge, onChangeAge] = useOnChangeHandel(0);
    const [city, setCity, onChangeCity] = useOnChangeHandel('');

    const prarams = useParams(); // object :{ id : '...' }
    console.log(prarams);

    useEffect(() => {
        getData();
    }, [])

    // function getData() {
    //     axios({
    //         url: 'http://localhost:5000/users',
    //         method: 'GET'
    //     })
    //     .then((response) => {
    //         // console.log(response);
    //         const { data } = response;
    //         setUsers(data);
    //     })
    //     .catch((err) => { console.log(err); })
    // }

    async function getData() {
        try {
            const { data } = await axios({ url: 'http://localhost:5000/users' });
            // console.log(data);
            setUsers(data);
        } catch (err) { console.log(err); }
    }

    const submitHandle = async function (e) {

        e.preventDefault();
        const newUser = { name, family, age, city };

        try {
            const response = await axios({
                url: 'http://localhost:5000/users',
                method: 'POST',
                data: newUser
            })
            getData();
        } catch (err) { console.log(err); }

    }

    const deleteHandle = async (id) => {
        try {
            const response = await axios({
                url: 'http://localhost:5000/users/' + id,
                method: 'DELETE'
            })
            getData();
        } catch (err) { console.log(err); }
    }

    const editHandle = async function (id) {

        const name = window.prompt('Enter Your New Name :');
        const family = window.prompt('Enter Your New Family :');
        const age = window.prompt('Enter Your New Age :');
        const city = window.prompt('Enter Your New City :');

        const editedUser = { name, family, age, city };

        try {
            const response = await axios({
                url: 'http://localhost:5000/users/' + id,
                method: 'PATCH',
                data: editedUser
            })
            getData();
        } catch (err) { console.log(err); }
    }

    // navigate betweem route

    const ids = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <h2>Axios Page</h2>

            {
                ids.map((item, index) => (<Link className="d-block" key={index.toString()} to={`/todo/${prarams.id}/${item}`}>Dynamic Clock {item}</Link>))
            }

            <form onSubmit={submitHandle} className='my-2'>
                <input type='text' value={name} onChange={onChangeName} placeholder='name' className='bg-dark text-white' />
                <input type='text' value={family} onChange={onChangeFamily} placeholder='family' className='bg-dark text-white' />
                <input type='number' value={age} onChange={onChangeAge} placeholder='age' className='bg-dark text-white' />
                <input type='text' value={city} onChange={onChangeCity} placeholder='city' className='bg-dark text-white' />
                <button className='bg-success text-white'>sumbit</button>
            </form>

            <table className="table table-dark table-border table-hover table-striped text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Family</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length === 0 ? <tr><td colSpan={6}>Loading ...</td></tr> :
                            users.map((item, index) => {
                                return (
                                    <>
                                        <tr key={item.id.toString()}>
                                            <th>{item.id}</th>
                                            <th>{item.name}</th>
                                            <th>{item.family}</th>
                                            <th>{item.age}</th>
                                            <th>{item.city}</th>
                                            <th><button onClick={editHandle.bind(null, item.id)} className='btn btn-outline-warning mx-1'>Edit</button><button onClick={deleteHandle.bind(null, item.id)} className='btn btn-outline-danger mx-1'>Delete</button></th>
                                        </tr>
                                    </>
                                );
                            }).reverse()
                    }
                </tbody>
            </table>
        </>
    );
}

export default Axios;