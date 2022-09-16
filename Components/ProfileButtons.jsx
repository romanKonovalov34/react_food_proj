import React from 'react'
import styles from './ProfileButtons.module.scss'
import ProfileButton from './ProfileButton'

const ProfileButtons = ({ profileButtons, onClick }) => {
  return (
    <div className={styles.buttons}>
      {profileButtons.map((btn, idx) =>
        <ProfileButton
          btn={btn}
          key={idx}
          profileButtons={profileButtons}
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default ProfileButtons