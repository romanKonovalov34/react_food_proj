import React from 'react'
import styles from './Profile.module.scss'
import ProfileButtons from './ProfileButtons'

const Profile = ({ profileButtons, onClick }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.userInfo}>
				<img className={styles.avatar} src="https://www.meme-arsenal.com/memes/11e645b82b367f8be2735a8d82470b6e.jpg" alt="Avatar" />
				<h3 className={styles.username}>Ivan Ivanov</h3>
			</div>
			<ProfileButtons
				profileButtons={profileButtons}
				onClick={onClick}
			/>
		</div>
	)
}

export default Profile