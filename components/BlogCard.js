import React from 'react';
import styles from '../styles/BlogCard.module.css'

export default function BlogCard(props) {
    const { img, title, text } = props
    const excerpt = text.length > 50 ? text.slice(0, 50) + '...' : text
    return (
        <div className={styles.cardContainer} style={{ backgroundImage: `url(${img})` }}>
            <div className={styles.imgHead} >

            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.text}>
                {excerpt}
            </div>
            <div className={styles.cardFooter}>

            </div>
        </div >
    )
}