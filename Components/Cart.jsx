import React, { useEffect } from 'react'
import styles from './Cart.module.scss'
import OrderList from './OrderList'
import { AiOutlineClose } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Cart = ({ visibilityCart, orderList, onClick }) => {

    function getTotalPrice() {
        let total = 0;
        [...orderList].map(order => {
            total += (order.cartOrders * order.price)
        })
        return total
    }

    return (
        <div className={[styles.cart, styles[visibilityCart]].join(' ')}>
            <button
                className={styles.closeButton}
                onClick={() => onClick()}
            >
                <AiOutlineClose size={25} />
            </button>

            {
                orderList.length

                    ?

                    <div>
                        <div className={styles.header}>
                            <h2 className={styles.headerText}>Order</h2>
                            <button className={styles.deleteButton}>
                                <RiDeleteBin6Line size={25} />
                            </button>
                        </div>
                        <OrderList orderList={orderList} />
                        <div className={styles.total}>
                            <h3 className={styles.totalHeader}>Total</h3>
                            <h3 className={styles.totalPrice}>
                                {getTotalPrice()}
                            </h3>
                        </div>
                    </div>

                    :
                    <div>
                        <h2 style={{textAlign: 'center'}}>The cart is currently empty</h2>
                        <img className={styles.cartImage} src="https://cdn-icons-png.flaticon.com/512/5234/5234583.png" alt="Cart is empty" />
                    </div>
            }
        </div>
    )
}

export default Cart