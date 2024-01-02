import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Login() {

    // route.push('/harchi') => router.push('login?redirect=/harchi')

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: session } = useSession();

    const router = useRouter();
    const {redirect} = router.query;

    async function submitHandle({ email, password }) {

        console.log(email, password);

        try {
            const result = await signIn('credentials', { redirect: false, email, password });
            if (result.error) console.log('failed !');
        } catch (err) { console.log(err); }

    }

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/')
        }
    }, [router, redirect, session])

    return (
        <>
            <form className='mx-auto p-5' style={{ width: 'fit-content' }} onSubmit={handleSubmit(submitHandle)}>
                <h2 className='my-4'>Login</h2>
                <div>
                    <label className='d-block' htmlFor='email'>Enter Your Email :</label>
                    <input {...register('email', { required: true })} type='email' id='email' placeholder='email' />
                    {errors.email && <p>Please, Enter Your Email</p>}
                </div>
                <div className='my-3'>
                    <label className='d-block' htmlFor='password'>Enter Your Password :</label>
                    <input {...register('password', { required: true, minLength: { value: 6, message: 'The number of characters is less than 6' } })} type='password' id='password' placeholder='password' />
                    {errors.password && (errors.password?.message ? <p>{errors.password.message}</p> : <p>Please, Enter Your Password</p>)}
                </div>
                <button className='btn btn-outline-success py-0 px-3'>Login</button>
                <div className='mt-2'>
                    <p>Don't Have An Account? <Link href='/register' className='text-warning'>Register</Link></p>
                </div>
            </form>
        </>
    );
}

export default Login;