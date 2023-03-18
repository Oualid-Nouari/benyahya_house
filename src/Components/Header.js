import React from 'react'
import Logo from '../imgs/Logo1.JPG'
const Header = ({setOpenCard, cardArr, setOpenLikedProdsModal}) => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-l-side'>
        <i class="fa-regular fa-clock"></i><span>08:30am/10:00pm</span><a href='#productss'>Products</a>
        </div>
        <img src={Logo} alt='' width='70px' height='70px' style={{transform: 'translateX(-40px)', borderRadius: 10}} />
        <div className='header-r-side' >
        <i class="fa-solid fa-basket-shopping card " onClick={() => setOpenCard(true)}>{cardArr.length !== 0 && <sup></sup>}</i>
        <i class="fa-regular fa-heart like" onClick={() => setOpenLikedProdsModal(true)}></i>
        </div>
      </div>
    </header>
  )
}

export default Header
