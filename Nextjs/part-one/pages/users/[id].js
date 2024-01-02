import { useRouter } from 'next/router';

function UserIdPage() {

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    function showUserIdHandle() {
        // router.push('/users/pouriya');
        router.push({ pathname: '/users/[id]', query: { id: 'pouriya' } });
    }

    return (
        <>
            <h2>User Id Page : {router.query.id}</h2>
            <button onClick={showUserIdHandle}>Id : 2</button>
        </>
    );
}

export default UserIdPage;