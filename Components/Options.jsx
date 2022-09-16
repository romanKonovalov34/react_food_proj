import React from 'react'
import styles from './Options.module.scss'
import MyOption from './MyOption'

const Options = ({ filterOptions, modalState, onClick }) => {
    return (
        <div className={styles.options} style={{ display: modalState }}>
            {[...filterOptions].map(option => {
                if (!option.isActive) {
                    return (
                        <MyOption
                            option={option}
                            onClick={onClick}
                            key={option.name}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Options