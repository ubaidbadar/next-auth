import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header/Header";
import HomeIcon from "../../icons/Home";
import styles from './AuthLayout.module.css';

interface propTypes {
    children: React.ReactNode,
    back?: boolean
}

const AuthLayout = (props: propTypes) => {
    const router = useRouter();
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.main}>
                <Link href='/'>
                    <a className={styles.logo}>
                        <HomeIcon />
                    </a>
                </Link>
                {props.children}
            </div>
            {props.back && (
                <footer className={styles.footer}>
                    <button className={styles.btn} onClick={router.back}>Back</button>
                </footer>
            )}
        </div>
    )
}

export default AuthLayout;