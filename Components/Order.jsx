import React from 'react'
import styles from './Order.module.scss'

const Order = ({ order, orderList }) => {
    return (
        <div className={styles.order}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={order.image} alt={order.name} />
            </div>
            <h3 className={styles.name}>{order.name}</h3>
            <div className={styles.counter}>
                <button className={[styles.button, styles.delete].join(' ')}>
                    <span className={styles.deleteText}>-</span>
                </button>
                <h3 className={styles.count}>{order.cartOrders}</h3>
                <button className={[styles.button, styles.add].join(' ')}>+</button>
            </div>
            <div className={styles.price}>{order.price * order.cartOrders}</div>
        </div>
    )
}

export default Order