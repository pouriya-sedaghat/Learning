import { useRouter } from 'next/router';

function Products() {

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return (
        <>
            <h2>Products</h2>
        </>
    );
}

export default Products;