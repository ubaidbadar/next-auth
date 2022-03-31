import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header/Header";
import HomeIcon from "../../icons/Home";
import styles from './AuthLayout.module.css';

interface propTypes {
    children: React.ReactNode
}

const AuthLayout = (props: propTypes) => {
    const router = useRouter();
    return (
        <>
        <Header />
        <div className={styles.root}>
            <Link href='/'>
                <a className={styles.logo}>
                    <HomeIcon />
                </a>
            </Link>
            {props.children}
            <button className={styles.btn} onClick={router.back}>Back</button>
        </div>
        </>
    )
}

export default AuthLayout;