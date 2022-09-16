import React from 'react'
import styles from './Notification.module.scss'

const Notification = ({ notification, onClick }) => {
    if (notification.title !== 'Empty') {
        return (
            <div className={styles.notification}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={notification.image} alt={notification.title} />
                </div>
                <div className={styles.info}>
                    <h4 className={styles.title}>{notification.title}</h4>
                    <h5 className={styles.date}>{notification.date}</h5>
                </div>
                <button
                    className={styles.button}
                    onClick={() => onClick(notification)}
                >
                    <span></span>
                </button>
            </div>
        )
    }
    else {
        return(
            <h2>You currently have no notifications ;)</h2>
        )
    }
}

export default Notification