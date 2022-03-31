import { useSession, signOut } from 'next-auth/react';
import styles from './Header.module.css';

const Header = () => {
    const { status, data } = useSession();
    if (status === 'loading') return null;
    console.log(data);
    return (
        <div className={styles.root}>
            {status === 'authenticated' ? (
                <>
                    <p>You are logged in</p>
                    <button className='button' onClick={() => signOut()}>Logout</button>
                </>
            ) : <p>You are not logged in</p>}
        </div>
    )
}

export default Header;