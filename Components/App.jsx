import React, { useState } from 'react'
import styles from './App.module.scss'
import Profile from './Profile'
import MainWindow from './MainWindow'
import { AiOutlineHome } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import Home from './Home'
import Menu from './Menu'
import Favorites from './Favorites'
import Settings from './Settings'

const App = () => {

  const [profileButtons, setProfileButtons] = useState([
    {
      icon: <AiOutlineHome size={25} />,
      value: 'Home',
      page: <Home key={'Home'} />,       // page: ([...props]) => {<Home props={[...props]} />},
      isActive: true
    },
    {
      icon: <BsBook size={23} />,
      value: 'Menu',
      page: <Menu key={'Menu'} />,
      isActive: false
    },
    {
      icon: <BsSuitHeart size={24} />,
      value: 'Favorites',
      page: <Favorites key={'Favorites'} />,
      isActive: false
    },
    {
      icon: <IoSettingsOutline size={25} />,
      value: 'Settings',
      page: <Settings key={'Settings'} />,
      isActive: false
    }
  ]);

  function setActiveButton(btn) {
    const copyProfileButtons = [...profileButtons]
    copyProfileButtons.map(button => {
      if (button.value !== btn.value) {
        setProfileButtons([...copyProfileButtons], button.isActive = false)
      };
    })
    setProfileButtons([...copyProfileButtons], btn.isActive = true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <Profile
          profileButtons={profileButtons}
          onClick={setActiveButton}
        />
        <MainWindow
          profileButtons={profileButtons}
        />
      </div>
    </div>
  )
}

export default App