import React, { useState } from 'react'
import styles from './Notifications.module.scss'
import LastNotification from './LastNotification'
import { IoCloseCircleOutline } from 'react-icons/io5'
import ListNotifications from './ListNotifications'

const Notifications = () => {

	const [notifications, setNotifications] = useState([
		{
			image: 'https://cdn-icons-png.flaticon.com/512/1857/1857924.png',
			title: 'Outumn deal: -50% on all burgers!',
			date: 'Today at 9:10 AM',
			number: 4
		},
		{
			image: 'https://cdn-icons-png.flaticon.com/512/2821/2821785.png',
			title: '100 donuts raffle!',
			date: 'Yesterday at 2:15 PM',
			number: 3
		},
		{
			image: 'https://cdn-icons-png.flaticon.com/512/1046/1046837.png',
			title: 'French fries coming soon!',
			date: 'Tuesday at 6:00 PM',
			number: 2
		},
		{
			image: 'https://cdn-icons-png.flaticon.com/512/837/837606.png',
			title: 'Expect chicken legs next week!',
			date: 'Tuesday at 10:30 AM',
			number: 1
		},
		{
			image: 'https://cdn-icons-png.flaticon.com/512/3595/3595458.png',
			title: 'Would you like a pizza for the price of 2?',
			date: 'Monday at 8:45 AM',
			number: 0
		},
	]);

	function deleteNotifications(notification) {
		setNotifications([...notifications].filter(notificationItem => notificationItem.title !== notification.title))
		if (notifications.length === 1) {
			setNotifications([{ title: 'Empty' }])
		}
	}

	return (
		<div className={styles.notifications}>
			<LastNotification
				notifications={notifications}
			/>
			<div className={styles.allNotifications}>
				<div className={styles.header}>
					<h3 className={styles.text}>Notifications</h3>
					<button className={styles.deleteButton}>
						<IoCloseCircleOutline size={25} />
					</button>
				</div>
				<ListNotifications
					notifications={notifications}
					onClick={deleteNotifications}
				/>
			</div>
		</div>
	)
}

export default Notifications