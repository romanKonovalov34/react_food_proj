import React, { useState } from 'react'
import styles from './TypeFood.module.scss'

const TypeFood = ({ food, getFoodCurrentType, type, listTypesFood, setListTypesFood }) => {

    function toggleType() {
        const listCopy = [...listTypesFood]
        listCopy.map(typeFood => {
            if (typeFood.name === type.name) {
                typeFood.isActive = true
            } else {
                typeFood.isActive = false;
            }
        })
        setListTypesFood(listCopy)
        getFoodCurrentType()
    }

    return (
        <div
            className={[styles.typeFood, styles['active' + type.isActive]].join(' ')}
            onClick={() => toggleType()}
        >
            <img className={styles.image} src={type.image} alt={type.name} />
            <h4 className={styles.text}>{type.name}</h4>
        </div>
    )
}

export default TypeFood