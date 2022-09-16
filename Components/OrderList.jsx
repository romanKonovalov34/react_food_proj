import React from 'react'
import styles from './OrderList.module.scss'
import Order from './Order'

const OrderList = ({ orderList }) => {
	return (
		<div className={styles.orderList}>
			{[...orderList].map(order => {
				return (
					<Order
						key={order.type + order.name}
						order={order}
						orderList={orderList}
					/>
				)
			}
			)}
		</div>
	)
}

export default OrderList