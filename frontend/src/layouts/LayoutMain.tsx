import Head from 'next/head'
import styles from './LayoutMain.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LayoutMain(props: StandardProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mega | Watch</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                {props.children}
            </main>

            <Footer />
        </div>
    )
}
