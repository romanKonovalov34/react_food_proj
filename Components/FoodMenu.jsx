import React, { useState, useMemo } from 'react'

import styles from './FoodMenu.module.scss'

import ListTypesFood from './ListTypesFood'
import FoodFilter from './FoodFilter'
import FoodList from './FoodList'

import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { MdPeopleOutline } from 'react-icons/md'
import { GrInstall } from 'react-icons/gr'



const FoodMenu = ({ listTypesFood, setListTypesFood, onClick }) => {

	const [filterOptions, setFilterOptions] = useState([
		{
			name: 'Recommended',
			icon: <GrInstall size={23} />,
			isActive: true
		},
		{
			name: 'Most popular',
			icon: <MdPeopleOutline size={24} />,
			isActive: false
		},
		{
			name: 'Most expensive',
			icon: <FaRegMoneyBillAlt size={23} />,
			isActive: false
		}
	]);

	const food = [
		{
			type: 'Burger',
			name: 'Beef Burger',
			price: '12',
			orders: 2,
			cartOrders: 0,
			image: 'https://menu2go.ru/images/food/2/2_20210408123827_6507.png',
		},
		{
			type: 'Pizza',
			name: 'Four Seasons',
			price: '16',
			orders: 1,
			cartOrders: 0,
			image: 'https://kuponoed.ru/wp-content/uploads/2020/09/248d2fdb.png',
		},
		{
			type: 'Burger',
			name: 'Chicken Burger',
			price: '7',
			orders: 4,
			cartOrders: 0,
			image: 'https://www.hungryjacks.com.au/Upload/HJ/Media/UNO/HJ00571_WEB_Jack%CE%93COs-Fried-Chicken-classic_800X600_3.png',
		},
		{
			type: 'Pizza',
			name: 'Margherita',
			price: '15',
			orders: 8,
			cartOrders: 0,
			image: 'https://i.pinimg.com/originals/f9/92/86/f992867928918a08037c1b6b9c4cf95a.png',
		},
		{
			type: 'Donut',
			name: 'Pinky',
			price: '3',
			orders: 2,
			cartOrders: 0,
			image: 'https://www.pngall.com/wp-content/uploads/11/Pink-Donut.png',
		},
		{
			type: 'Pizza',
			name: 'Pepperoni',
			price: '17',
			orders: 6,
			cartOrders: 0,
			image: 'https://sergiopizza.ru/upload/iblock/4f4/4f4b7fa79e8465500baa585cf4f8b803.png',
		},
		{
			type: 'Donut',
			name: 'Chocko',
			price: '5',
			orders: 2,
			cartOrders: 0,
			image: 'https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-250.png',
		},
		{
			type: 'Burger',
			name: 'Fat Burger',
			price: '10',
			orders: 9,
			cartOrders: 0,
			image: 'https://www.pngall.com/wp-content/uploads/2016/05/Burger-PNG.png',
		},
		{
			type: 'Donut',
			name: 'Fluffy',
			price: '4',
			orders: 6,
			cartOrders: 0,
			image: 'https://avatanplus.com/files/resources/original/5831748ae00b7158812f3ea6.png',
		},
		{
			type: 'Donut',
			name: 'Doncake',
			price: '3',
			orders: 3,
			cartOrders: 0,
			image: 'https://avatanplus.com/files/resources/original/59189bcf729ac15c0820a26d.png',
		},
		{
			type: 'Pizza',
			name: 'Marinara',
			price: '16',
			orders: 7,
			cartOrders: 0,
			image: 'https://cdn.bellinigroup.ru/upload/202112/61cae9a121550_800x800_fit.png.webp',
		},
		{
			type: 'Burger',
			name: 'Man',
			price: '12',
			orders: 5,
			cartOrders: 0,
			image: 'http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4131.png',
		},
		{
			type: 'Burger',
			name: 'Double',
			price: '13',
			orders: 8,
			cartOrders: 0,
			image: 'https://freepngimg.com/save/159187-burger-double-cheese-free-png-hq/700x487',
		},
	]

	const [sortedFood, setSortedFood] = useState([...food]);

	function getFoodCurrentType() {
		const currentType = [...listTypesFood].filter(item => item.isActive)
		if (currentType[0].type !== 'All') {
			setSortedFood([...food].filter(foodItem => foodItem.type === currentType[0].type))
		} else {
			setSortedFood([...food])
		}
	}

	useMemo(() => {
		applyFilterOption()
	}, [...listTypesFood].map(item => item.isActive))

	function applyFilterOption() {
		const activeOption = [...filterOptions].filter(option => option.isActive)
		if (activeOption[0].name === 'Recommended') {
			getFoodCurrentType()
		}
		if (activeOption[0].name === 'Most expensive') {
			const filteredFood = [...sortedFood]
			let temp = {};
			for (let i = 0; i < filteredFood.length; i++) {
				for (let j = 0; j < i; j++) {
					if (Number(filteredFood[j].price) < Number(filteredFood[i].price)) {
						temp = filteredFood[j]
						filteredFood[j] = filteredFood[i]
						filteredFood[i] = temp
					}
				}
			}
			setSortedFood([...filteredFood])
		}
		if (activeOption[0].name === 'Most popular') {
			const filteredFood = [...sortedFood]
			let temp = {};
			for (let i = 0; i < filteredFood.length; i++) {
				for (let j = 0; j < i; j++) {
					if (filteredFood[j].orders < filteredFood[i].orders) {
						temp = filteredFood[j]
						filteredFood[j] = filteredFood[i]
						filteredFood[i] = temp
					}
				}
			}
			setSortedFood([...filteredFood])
		}
	}

	function toggleOptions(newOption) {
		[...filterOptions].map(option => {
			if (option.name === newOption.name) {
				setFilterOptions([...filterOptions], option.isActive = !option.isActive)
			}
			else {
				setFilterOptions([...filterOptions], option.isActive = false)
			}
		})
		applyFilterOption()
	}

	return (
		<div className={styles.menu}>
			<ListTypesFood
				food={food}
				getFoodCurrentType={getFoodCurrentType}
				listTypesFood={listTypesFood}
				setListTypesFood={setListTypesFood}
			/>
			<FoodFilter
				filterOptions={filterOptions}
				onClick={toggleOptions}
			/>
			<FoodList
				food={sortedFood}
				listTypesFood={listTypesFood}
				onClick={onClick}
			/>
		</div>
	)
}

export default FoodMenu