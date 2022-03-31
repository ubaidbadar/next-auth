import AuthLayout from "../hoc/AuthLayout/AuthLayout";
import { NextPage } from 'next';
import { useState } from "react";
import { signIn } from 'next-auth/react'
import Link from "next/link";

const EmailMagicLinkPage: NextPage = () => {
    const [email, setEmail] = useState('');
    const signInWithMagicLink = async () => {
        const res = await signIn('email', { email });
        console.log(res);
    }
    return (
        <AuthLayout>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} className="input" placeholder="Type your email address" />
            <button className="button" onClick={signInWithMagicLink}>Send Magic Link</button>
            <p className="text-center">OR</p>
            <Link href={`/password?email=${email}`} >
                <a className="button button-white">
                    Use a Password
                </a>
            </Link>
        </AuthLayout>
    )
}

export default EmailMagicLinkPage;