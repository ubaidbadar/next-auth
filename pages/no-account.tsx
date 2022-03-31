import { NextPage } from 'next';
import AuthLayout from '../hoc/AuthLayout/AuthLayout';
import Link from 'next/link';




const NoAccountPage: NextPage = props => {

    return (
        <AuthLayout back={false}>
            <h2>Sorry there is no account that matches those details.</h2>
            <h2>Did you use another login method?</h2>
            <h2>Or you could send yourself an email to login</h2>
            <Link href='/'>
                <a className='button'>Back to OAuth sign in</a>
            </Link>
            <p className='text-center'>OR</p>
            <Link href='/email'>
                <a className='button button-white'>Use Email</a>
            </Link>
        </AuthLayout>
    )
}


export default NoAccountPage;