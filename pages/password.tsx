import { useRouter } from "next/router";
import { useState, FormEvent } from "react";
import AuthLayout from "../hoc/AuthLayout/AuthLayout";
import { signIn } from 'next-auth/react';

const LoginWithPasswordPage = () => {
    const router = useRouter();
    const [credentials, setCredentials] = useState({ email: router.query.email || '', password: '' });
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn('credentials', {...credentials, redirect: false});
        console.log(res);
    }
    return (
        <AuthLayout>
            <form onSubmit={onSubmit}>
                <input type='email' placeholder="Email" value={credentials.email} className="input" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
                <input type='password' placeholder="Password" className="input" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                <button className="button">Sign In</button>
            </form>
        </AuthLayout>
    )
}

export default LoginWithPasswordPage;