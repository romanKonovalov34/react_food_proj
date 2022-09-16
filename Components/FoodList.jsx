import React from 'react'
import styles from './FoodList.module.scss'
import FoodItem from './FoodItem'

const FoodList = ({ food, onClick }) => {
    return (
        <div className={styles.foodList}>
            {[...food].map(item =>
                <FoodItem
                    key={item.name+Date.now()}
                    item={item}
                    onClick={onClick}
                />
            )}
        </div>
    )
}

export default FoodList