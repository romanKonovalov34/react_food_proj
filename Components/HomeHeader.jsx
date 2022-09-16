import React, { useState, useRef, useEffect } from 'react'
import styles from './HomeHeader.module.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

const HomeHeader = ({ onClick, orderList, children }) => {
    
    function countOrders() {
        if (orderList) {
            let count = 0;
            [...orderList].map(order => {
                count += order.cartOrders
            })
            return count;
        }
    }

    return (
        <div className={styles.header}>
            {children}
            <h1 className={styles.title}>Welcome to <br />FoodShop</h1>
            <div className={styles.headerButtons}>
                <div className={[styles.headerButton, styles.find].join(' ')}>
                    <AiOutlineSearch size={25} />
                </div>
                <div
                    className={[styles.headerButton, styles.shoppingCard].join(' ')}
                    onClick={onClick}
                >
                    <AiOutlineShoppingCart size={25} />
                    <div className={[styles.ordersCount, (orderList.length ? styles.active : '')].join(' ')}>
                        {countOrders()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader