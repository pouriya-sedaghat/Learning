import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage({ loadedProduct }) {

    if (!loadedProduct) return <h2>Loading ...</h2>
    return (
        <>
            <h2>{loadedProduct.title}</h2>
            <p>{loadedProduct.price}</p>
        </>
    )
}

export default ProductDetailPage;

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonDate = await fs.readFile(filePath);
    return JSON.parse(jsonDate);
}

export async function getStaticProps(context) {

    const { params } = context;
    const productId = params.pId;

    const data = await getData();

    const product = data.products.find((item) => String(item.id) === productId);

    return {
        props: { loadedProduct: product }
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { pId: '1' } }, { params: { pId: '2' } }, { params: { pId: '3' } }],
//         fallback: false
//     }
// }

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { pId: '1' } }],
//         fallback: true
//     }
// }

export async function getStaticPaths() {

    const data = await getData();

    const ids = data.products.map((item) => item.id);
    const params = ids.map((item) => ({ params: { pId: item.toString() } }));

    return {
        paths: params,
        fallback: false
    }
}