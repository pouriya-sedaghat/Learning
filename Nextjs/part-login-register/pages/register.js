import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    async function submitHandle({ name, email, password }) {

        console.log(name, email, password);

        const reqBody = { name, email, password };

        const response = await fetch('http://localhost:3000/api/user', { method: 'POST', body: JSON.stringify(reqBody), headers: { 'Content-Type': 'application/json' } });
        const responseData = await response.json();

        // console.log(responseData);

        if (responseData?.massage) {
            await signIn('credentials', { redirect: true, callbackUrl: '/', email, password });
        }
    }

    return (
        <>
            <form style={{ width: 'fit-content' }} className='mx-auto my-5' onSubmit={handleSubmit(submitHandle)}>
                <h2 className='mb-4'>Register</h2>
                <div>
                    <label className='d-block' htmlFor='name'>Enter Your Name :</label>
                    <input {...register('name', { required: true, minLength: { value: 3, message: 'The number of characters is less than 3 .' } })} type='text' id='name' placeholer='name' />
                    {errors.name && (errors.name?.message ? <p>{errors.name.message}</p> : <p>Please Enter Your Name .</p>)}
                </div>
                <div className='my-3'>
                    <label className='d-block' htmlFor='email'>Enter Your Email :</label>
                    <input {...register('email', { required: true })} type='email' id='email' placeholer='email' />
                    {errors.email && <p>Please Enter Your Email .</p>}
                </div>
                <div>
                    <label className='d-block' htmlFor='password'>Enter Your Password :</label>
                    <input {...register('password', { required: true, minLength: { value: 6, message: 'The number of characters is less than 6 .' } })} type='password' id='password' placeholer='password' />
                    {errors.password && (errors.password?.message ? <p>{errors.password.message}</p> : <p>Please Enter Your Password .</p>)}
                </div>
                <button className='btn btn-outline-primary py-0 mt-4'>Register</button>
            </form>
        </>
    );
}

export default RegisterPage;