import React from 'react'
import styles from './MyOption.module.scss'
import profileButtonStyles from './ProfileButton.module.scss'

const MyOption = ({ option, onClick }) => {
    return (
        <div
            className={[profileButtonStyles.button, styles.option].join(' ')}
            onClick={() => onClick(option)}
        >
            <div className={profileButtonStyles.icon}>
                {option.icon}
            </div>
            {option.name}
        </div>
    )
}

export default MyOption