
import Link from "next/link";
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <div className={styles.container}>
            <nav>
                <Link href="/">
                    <a className={styles.link}>Watch</a>
                </Link>
                <Link href="/upload">
                    <a className={styles.link}>Upload</a>
                </Link>
            </nav>
            <nav>
                <Link href="/signin">
                    <a className={styles.link}>Sign In</a>
                </Link>
                <Link href="/register">
                    <a className={styles.link}>Register</a>
                </Link>
            </nav>
        </div>
    )
}
