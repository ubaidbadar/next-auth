import { useRouter } from "next/router";
import { useState, FormEvent } from "react";
import AuthLayout from "../hoc/AuthLayout/AuthLayout";
import { signIn } from 'next-auth/react';
import verifyEmailHandler from "../lib/verifyEmailHandler";

const LoginWithPasswordPage = () => {
    const router = useRouter();
    const email = router.query.email;
    const [credentials, setCredentials] = useState({ email: typeof email === 'string' ? email : '' || '', password: '' });
    const isValid = verifyEmailHandler(credentials.email);
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!isValid) return;
        const res: any = await signIn('credentials', { ...credentials, redirect: false });
        if (res.error) router.push('/no-account')

    }
    return (
        <AuthLayout>
            <form onSubmit={onSubmit}>
                <input type='email' placeholder="Email" value={credentials.email} className="input" onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
                <input type='password' placeholder="Password" className="input" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                <button className="button" disabled={!isValid}>Sign In</button>
            </form>
        </AuthLayout>
    )
}

export default LoginWithPasswordPage;