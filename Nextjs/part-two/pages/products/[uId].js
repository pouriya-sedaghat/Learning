function UserIdPage({ id }) {
    return (
        <>
            <h2>User Id : {id}</h2>
        </>
    );
}
export default UserIdPage;

export async function getServerSideProps({ req, res, params }) {
    const { uId } = params;
    return {
        props: { id: uId }
    }
}