import styles from './header.module.scss';
import Link from 'next/link';
import { AiOutlineMenu } from "react-icons/ai";
import { redirect } from 'next/navigation';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.headerContainer} >
                    <li className={styles.headerLink}><h3><Link href={'/'}>Home</Link></h3></li>
                    <li className={styles.headerLink}><h3><Link href={'/categories/men\'s clothing'}>Men's clothing</Link></h3></li>
                    <li className={styles.headerLink}><h3><Link href={'/categories/women\'s clothing'}>Women's clothing</Link></h3></li>
                    <li className={styles.headerLink}><h3><Link href={'/categories/electronics'}>Electronics</Link></h3></li>
                    <li className={styles.headerLink}><h3><Link href={'/categories/jewelery'}>Jewelery</Link></h3></li>
                </ul>
            </nav>

            <nav>
                <input type="checkbox" id="burger-toggle" className={styles.menuCheckbox} />
                <label htmlFor="burger-toggle" className={styles.menuOpener}>&#9776;</label>

                <ul className={styles.burgerMenu}>
                    <li className={styles.menuLink}><h3><Link href={'/'}>Home</Link></h3></li>
                    <li className={styles.menuLink}><h3><Link href={'/categories/men\'s clothing'}>Men's clothing</Link></h3></li>
                    <li className={styles.menuLink}><h3><Link href={'/categories/women\'s clothing'}>Women's clothing</Link></h3></li>
                    <li className={styles.menuLink}><h3><Link href={'/categories/electronics'}>Electronics</Link></h3></li>
                    <li className={styles.menuLink}><h3><Link href={'/categories/jewelery'}>Jewelery</Link></h3></li>
                </ul>
            </nav>
        </header>
    );
}