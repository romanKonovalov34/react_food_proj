import React from 'react'
import styles from './LastNotification.module.scss'

const LastNotification = ({ notifications }) => {
	if (notifications[0].title === 'Empty') {
		return (
			<div className={styles.lastNotification}>
				<h2>There will be a lot of interesting and important news coming soon, don't miss it!</h2>
				<div className={styles.imageWrapper}>
					<img className={styles.image} src="https://www.metrofamily.org/wp-content/uploads/2018/02/good-news-v2-e1518801904334.png" alt="Wait for news!" />
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.lastNotification}>
				<h2>{notifications[0].title}</h2>
				<div className={styles.imageWrapper}>
					<img className={styles.image} src={notifications[0].image} alt="It's very tasty!" />
				</div>
			</div>
		)
	}

}

export default LastNotification