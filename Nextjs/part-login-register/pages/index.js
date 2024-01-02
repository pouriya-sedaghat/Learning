import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { useRouter } from "next/router";

function HomePage() {

  const { status, data: session } = useSession();

  const router = useRouter();

  function signOutHandle() {
    signOut({ callbackUrl: '/login' });
  }

  function goToRegister() {
    router.push('login?redirect=/register');
  }

  return (
    <>
      <h2>Home Page</h2>
      {
        status === 'loading' ? <p>Loading ...</p> : session?.user ? (
          <>
            <p className="my-2">{session.user.name}</p>
            <button className="d-block my-2 btn btn-outline-info py-0" onClick={signOutHandle}>Logout</button>
          </>
        ) : <button className="d-block  my-2 btn btn-outline-info py-0"><Link href='/login'>Login</Link></button>
      }
      <button className="d-block btn btn-outline-warning py-0" onClick={goToRegister}>Register</button>
    </>
  );
}

export default HomePage;