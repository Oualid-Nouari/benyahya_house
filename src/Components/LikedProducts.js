import React from 'react'
import { motion } from 'framer-motion'

const LikedProducts = ({likedProdsArr, setOpenLikedProdsModal, openLikedProdsModal, setLikedProdsArr}) => {
    openLikedProdsModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    const deleteFromLiked = (id) => {
      let updatedLikedArr = [...likedProdsArr].filter((prod) => prod.likedId !== id)
      setLikedProdsArr(updatedLikedArr);
    }
  return (
    <motion.div 
    className='liked-products-container' animate={{y: openLikedProdsModal ? -500 : 500}} transition={{type: 'tween', duration: .3}}>
        <h1>Products You Like !</h1>
        <div className='products'>
          <i class="fa-solid fa-xmark close" onClick={() => setOpenLikedProdsModal(false)}></i>
            {likedProdsArr.length === 0 ?
            <p className='noProductLiked'>No Product Liked !</p> :
            likedProdsArr.map((prod) => {
                return (
                    <div className='product'>
                        <img src={prod.likedImg} alt="" width="110px" height="80px" style={{padding: "10px "}} />
                        <div className='product-details'>
                          <p className='prod-name'>{prod.likedName}</p>
                          <p className="price">{prod.likedPrice}DH</p>
                        </div>
                        <div className='addlike-product'>
                          <button className='add2card'>Add to card</button>
                          <i class="fa-solid fa-heart" style={{color: "brown"}} onClick={() => {deleteFromLiked(prod.likedId)}}></i>
                        </div>
                    </div>
                )
              })
            }
          </div>
    </motion.div>
  )
}

export default LikedProducts
