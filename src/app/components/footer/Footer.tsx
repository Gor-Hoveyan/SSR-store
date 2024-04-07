import styles from './footer.module.scss';


export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <p className={styles.footerParagraph}>2024 © Online Store | All rights reserved</p>
                <p className={styles.footerParagraph}>Used API : <a target='_blank' href='https://fakestoreapi.com/' className={styles.footerLink}>Fake Store API</a></p>
            </div>
        </footer>
    );
}