import { NextPage } from 'next';
import AuthLayout from '../hoc/AuthLayout/AuthLayout';
import { signIn } from 'next-auth/react'
import Link from 'next/link';




const LoginPage: NextPage = props => {
    const oAuthHandler = (name: string) => signIn(name, { redirect: false });
    
    return (
        <AuthLayout back={false}>
            <button className='button' onClick={() => oAuthHandler('google')}>Google</button>
            <button className='button' onClick={() => oAuthHandler('linkedin')}>Linkedin</button>
            <p className='text-center'>OR</p>
            <Link href='/email'>
                <a className='button button-white'>Email</a>
            </Link>
        </AuthLayout>
    )
}


export default LoginPage;