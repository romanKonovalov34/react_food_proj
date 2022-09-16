import React from 'react'
import styles from './MainWindow.module.scss'

const MainWindow = ({ profileButtons }) => {
	return (
		<div className={styles.mainWindow}>
			{[...profileButtons].map(button => {
				if (button.isActive) {
					return (
						button.page
					)
				}
			})}
		</div>
	)
}

export default MainWindow