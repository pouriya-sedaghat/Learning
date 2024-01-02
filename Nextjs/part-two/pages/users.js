function UserPage({ username }) {
    return (
        <>
            <h2>{username}</h2>
        </>
    );
}

export default UserPage;

export async function getServerSideProps({ req, res, params }) {
    console.log(req, res);
    return {
        props: { username: 'pouriya' }
    }
}