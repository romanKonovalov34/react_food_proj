import React from 'react'
import styles from './ListNotifications.module.scss'
import Notification from './Notification'

const ListNotifications = ({ notifications, onClick }) => {
    return (
        <div className={styles.listNotifications}>
            {[...notifications].map(notification =>
                <Notification
                    notification={notification}
                    onClick={onClick}
                    key={notification.title}
                />
            )}
        </div>
    )
}

export default ListNotifications