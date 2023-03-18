import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'

const Home = ({setOpenCard, cardArr, setOpenLikedProdsModal}) => {
  return (
    <div>
      <Header setOpenCard={setOpenCard} cardArr={cardArr} setOpenLikedProdsModal={setOpenLikedProdsModal} />
      <Main />
      <div className='wall-overlay'></div>
      <div className='img'></div>
    </div>
  )
}

export default Home
