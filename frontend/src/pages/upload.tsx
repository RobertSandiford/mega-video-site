import Head from 'next/head'
import styles from './upload.module.css'

import LayoutMain from '../layouts/LayoutMain'

import Form from '../components/upload/Form'

export default function Upload() {
    return (
        <LayoutMain>
            <Form />
        </LayoutMain>
    )
}

/*
<div className={styles.container}>
            <Head>
                <title>Mega | Upload</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <VideoMiddle />
            </main>

            <Footer />
        </div>
        */