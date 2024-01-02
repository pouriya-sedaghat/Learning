import Link from 'next/link';

function UserPage() {

    const users = [{ usename: 'masood', id: 1 }, { usename: 'pouriya', id: 2 }, { usename: 'peyman', id: 3 }];

    return (
        <>
            <h2>User Page</h2>
            <ul>
                {
                    users.map((item, index) => {
                        return (
                            <>
                                {/* <li key={item.id.toString()}><Link href={`/users/${item.id}`}>{item.usename}</Link></li> */}
                                <li key={item.id.toString()}><Link href={{ pathname: '/users/[id]', query: { id: item.id } }}>{item.usename}</Link></li>
                            </>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default UserPage;
