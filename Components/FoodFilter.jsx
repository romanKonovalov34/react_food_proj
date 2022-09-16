import React, { useState } from 'react'
import styles from './FoodFilter.module.scss'
import Options from './Options'
import { HiSelector } from 'react-icons/hi'

const FoodFilter = ({ filterOptions, onClick }) => {

    const [modalState, setModalState] = useState('none');

    function toggleState() {
        (modalState == 'none') ? setModalState('flex') : setModalState('none');
    }

    return (
        <div className={styles.filter} onClick={() => toggleState()}>
            <button className={styles.filterButton}>
                {[...filterOptions].map(option => {
                    if (option.isActive) {
                        return (option.name)
                    }
                })}
                <HiSelector size={25} />
            </button>
            <Options
                modalState={modalState}
                filterOptions={filterOptions}
                onClick={onClick}
            />
        </div>
    )
}

export default FoodFilter