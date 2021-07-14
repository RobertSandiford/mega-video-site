import React from 'react'

import styles from './Form.module.css'

interface FormInput {
    title: {
        value: string
    },
    description: {
        value: string
    }
}

export default function Form() {

    const uploadVideo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // todo: validate

        const data = {
            title: (event.target as unknown as FormInput).title.value,
            description: (event.target as unknown as FormInput).description.value
        }

        console.log('data', data)

        /*
        const res = await fetch('/api/uploadVideo', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
        */
    }

    return (
        <form className={styles.form} onSubmit={uploadVideo}>
           <h3>Upload a video!</h3>
           <div>
               <input name="title" placeholder="title" />
            </div>
            <div>
                <input name="description" placeholder="description" />
            </div>
            <div>
                <input type="file" name="video" />
            </div>
           <button type="submit">Upload!</button>
        </form>
    )
}
        