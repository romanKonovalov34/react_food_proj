import React from 'react'
import styles from './ListTypesFood.module.scss'
import TypeFood from './TypeFood'

const ListTypesFood = ({ food, getFoodCurrentType, listTypesFood, setListTypesFood }) => {
    return (
        <div className={styles.list}>
            {[...listTypesFood].map(type =>
                <TypeFood
                    food={food}
                    getFoodCurrentType={getFoodCurrentType}
                    type={type}
                    listTypesFood={listTypesFood}
                    setListTypesFood={setListTypesFood}
                    key={type.name}
                />
            )}
        </div>
    )
}

export default ListTypesFood