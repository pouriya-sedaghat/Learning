import { useRouter } from 'next/router';

function UserPost() {

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    return (
        <>
            <h2>User Post</h2>
        </>
    );
}

export default UserPost;