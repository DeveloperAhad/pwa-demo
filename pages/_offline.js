import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';
import {Inter} from "@next/font/google"; // create this CSS file for styling
const inter = Inter({ subsets: ['latin'] })

export default function _offline() {
    const [menuSelection, setMenuSelection] = useState(null);
    const router = useRouter();

    const handleMenuClick = (menu) => {
        setMenuSelection(menu);
        localStorage.setItem('menuSelection', menu);
    };

    useEffect(() => {
        const handleOnline = () => {
            const savedMenu = localStorage.getItem('menuSelection');
            if (savedMenu) {
                router.push(savedMenu);
                localStorage.removeItem('menuSelection');
            }
        };

        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('online', handleOnline);
        };
    }, [router]);

    return (
        <div className={styles.main}>
            <div>
                <h1 className={inter.className}>You are offline</h1>
                <p className={inter.className}>Please select a menu option. Your selection will be saved and redirected when you are back
                    online.</p>
                <div className={styles.menu}>
                    <button onClick={() => handleMenuClick('/')}>Home</button>
                    <button onClick={() => handleMenuClick('/about')}>About</button>
                    <button onClick={() => handleMenuClick('/contact')}>Contact</button>
                </div>
            </div>
        </div>
    );
}
