import { useParams, Link } from "react-router-dom";

export default function ProductsPage() {

    const params = useParams();
    console.log(params);

    const slug = ['pouryia', 'zahra'];

    return (
        <>
            <h2>Products Page</h2>

            {
                slug.map((item,index) => (<Link to={`/products/${item}`} className="d-block" key={index.toString()}>{item}</Link>))
            }
        </>
    );
}