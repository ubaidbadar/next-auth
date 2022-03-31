import AuthLayout from "../hoc/AuthLayout/AuthLayout";
import { NextPage } from 'next';
import { useState, FormEvent } from "react";
import { signIn } from 'next-auth/react'
import Link from "next/link";
import verifyEmailHandler from "../lib/verifyEmailHandler";

const EmailMagicLinkPage: NextPage = () => {
    const [email, setEmail] = useState('');
    const isValid = verifyEmailHandler(email);
    const signInWithMagicLink = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!isValid) return;
        const res = await signIn('email', { email });
        console.log(res);
    }
    return (
        <AuthLayout>
            <form onSubmit={signInWithMagicLink}>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} className="input" placeholder="Type your email address" />
                <button disabled={!isValid} className="button">Send Magic Link</button>
            </form>
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