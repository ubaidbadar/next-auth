import Link from "next/link";
import React from "react";
import HomeIcon from "../../icons/Home";
import styles from './AuthLayout.module.css';

interface propTypes {
    children: React.ReactNode
}

const AuthLayout = (props: propTypes) => {
    return (
        <div className={styles.root}>
            <Link href='/'>
                <a className={styles.logo}>
                    <HomeIcon />
                </a>
            </Link>
            {props.children}
        </div>
    )
}

export default AuthLayout;