import fs from 'fs/promises';
import path from 'path';
import { useState } from 'react';

function ProductsPage({ data }) {

    const [product, setProduct] = useState({});

    async function showProductHandler(id) {

        // const response = await fetch(('http://localhost:3000/api/' + id));
        const response = await fetch(`http://localhost:3000/api/${id}`);
        const responseData = await response.json();
        setProduct(responseData.product);

    }

    return (
        <>
            <ul>
                {
                    data.map((item, index) => <li key={item.id.toString()} onClick={showProductHandler.bind(this, item.id)}>title : {item.title}</li>)
                }
            </ul>

            {product?.price && <p>{product.title} Price : {product.price}</p>}

        </>
    );
}

export default ProductsPage;

export async function getStaticProps() {

    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: { data }
    }
}