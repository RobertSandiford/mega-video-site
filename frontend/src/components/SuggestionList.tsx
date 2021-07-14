
import styles from './SuggestionList.module.css'
import dynamic from 'next/dynamic'

import SuggestedVideo from './SuggestedVideo'
//const SuggestedVideo = component('./SuggestedVideo')
//const SuggestedVideo = dynamic(() => import('./SuggestedVideo'))
//const SuggestedVideo = component('SuggestedVideo')
//const SuggestedVideo = component('./components/SuggestedVideo')

export default function Player() {
    return (
        <div className={styles.list}>
            <SuggestedVideo />
            <SuggestedVideo />
            <SuggestedVideo />
        </div>
    )
}
