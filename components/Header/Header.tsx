import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const { status, data } = useSession();
    const user = data?.user;
    if (status === 'loading') return null;
    return (
        <div className={styles.root}>
            {status === 'authenticated' ? (
                <>
                    <div className={styles.main}>
                        {user?.image && <img src={user.image} alt='' />}
                        <div>
                            <p>Signed in as</p>
                            <b>{user?.email}</b>
                        </div>
                    </div>
                    <button className='button' onClick={() => signOut()}>Logout</button>
                </>
            ) : <p>You are not logged in</p>}
        </div>
    )
}

export default Header;