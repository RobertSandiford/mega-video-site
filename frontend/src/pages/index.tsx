import Head from 'next/head'
import styles from './index.module.css'

import Header from '../components/Header'
//import Grid from './components/Grid'
import VideoMiddle from '../components/VideoMiddle'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mega | Watch</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <VideoMiddle />
            </main>

            <Footer />
        </div>
    )
}
