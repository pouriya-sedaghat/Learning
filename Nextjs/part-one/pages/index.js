// export default function HomePage() {
//     return (
//         <>
//             <h2>Home Page</h2>
//         </>
//     );
// }
import Link from 'next/link';

function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <ul>
                <li><Link href='/blog/posts'>Post Page</Link></li>
            </ul>
        </>
    );
}

export default HomePage;