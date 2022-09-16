import React, { useState } from 'react'
import styles from './Home.module.scss'
import HomeHeader from './HomeHeader'
import FoodMenu from './FoodMenu'
import Notifications from './Notifications'
import Cart from './Cart'


const Home = () => {

    const [listTypesFood, setListTypesFood] = useState([
        {
            type: 'All',
            name: 'All',
            image: 'https://cdn-icons-png.flaticon.com/512/3703/3703377.png',
            isActive: true
        },
        {
            type: 'Pizza',
            name: 'Pizza',
            image: 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
            isActive: false
        },
        {
            type: 'Burger',
            name: 'Burgers',
            image: 'https://cdn-icons-png.flaticon.com/512/198/198416.png',
            isActive: false
        },
        {
            type: 'Donut',
            name: 'Donuts',
            image: 'https://cdn-icons-png.flaticon.com/512/440/440220.png',
            isActive: false
        }
    ])

    const [visibilityCart, setVisibilityCart] = useState('notVisible');

    function toggleCartSidebar() {
        visibilityCart === 'notVisible' ? setVisibilityCart('visible') : setVisibilityCart('notVisible')
    }

    const [orderList, setOrderList] = useState([]);

    function changeCartItems(item) {
        const newOrderList = [...orderList]
        const identical = newOrderList.filter(order => item.name === order.name)
        if (identical.length > 0) {
            setOrderList([...newOrderList], identical[0].cartOrders += 1)
        } else {
            newOrderList.push(item)
            setOrderList([...newOrderList], newOrderList[newOrderList.length - 1].cartOrders += 1)
        }
    }

    return (
        <div className={styles.home}>
            <div className={styles.inner}>
                <HomeHeader
                    orderList={orderList}
                    onClick={toggleCartSidebar}
                />
                <div className={styles.body}>
                    <FoodMenu
                        listTypesFood={listTypesFood}
                        setListTypesFood={setListTypesFood}
                        onClick={changeCartItems}
                    />
                    <Notifications />
                </div>
            </div>
            <Cart
                visibilityCart={visibilityCart}
                orderList={orderList}
                onClick={toggleCartSidebar}
            />
        </div>
    )
}

export default Home