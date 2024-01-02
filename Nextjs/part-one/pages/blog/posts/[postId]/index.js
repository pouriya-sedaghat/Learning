import { useRouter } from 'next/router';

function SinglePost() {

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return (
        <>
            <h2>Single Post</h2>
        </>
    );
}

export default SinglePost;