import React from 'react'
import styles from './FoodItem.module.scss'

const FoodItem = ({ item, onClick }) => {
    return (
        <div className={styles.foodItem}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={item.image} alt={item.name} />
            </div>
            <div className={styles.name}>
                {item.name}
            </div>
            <div className={styles.description}>
                {item.description}
            </div>
            <div className={styles.row}>
                <div className={styles.price}>
                    {item.price}
                </div>
                <button
                    className={styles.button}
                    onClick={() => onClick(item)}
                >+</button>
            </div>
        </div>
    )
}

export default FoodItem