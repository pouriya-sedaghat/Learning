import { useState, useEffect } from 'react';

function OrdersPage({ initialData }) {

    const [data, setData] = useState(initialData);

    useEffect(() => {
        getData();
    }, [])


    async function getData() {
        const response = await fetch(' http://localhost:5000/orders');
        const responseData = await response.json();
        setData(responseData);
    }

    return (
        <>
            <h2>Orders Page</h2>
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <li key={item.id.toString()}>username : {item.username} amount : {item.amount}</li>
                            </>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default OrdersPage;

export async function getStaticProps() {

    const response = await fetch(' http://localhost:5000/orders');
    const responseData = await response.json();

    return {
        props: { initialData: responseData }
    }
}