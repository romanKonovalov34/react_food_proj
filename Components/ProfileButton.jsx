import React from 'react'
import styles from './ProfileButton.module.scss'

const ProfileButton = ({ profileButtons, btn, onClick }) => {

	const buttonClass = [styles.button]
	const iconClass = [styles.icon]

	if (btn.isActive === true) {
		buttonClass.push(styles.active)
		iconClass.push(styles.active)
	}

	return (
		<div className={buttonClass.join(' ')} onClick={() => onClick(btn)}>
			<div className={iconClass.join(' ')}>
				{btn.icon}
			</div>
			{btn.value}
		</div>
	)
}

export default ProfileButton