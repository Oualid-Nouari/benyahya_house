import React from 'react'
import { motion } from 'framer-motion'
import ProdData from '../Data/ProductsData'
import ProductInModal from './ProductInModal'
const CakesModal = ({openCakesModal, setOpenCakesModal, openSandwichModal, setOpenSandwichModal, setOpenCookiesModal,
  openCookiesModal, openBreadModal, setOpenBreadModal, setCardArr, cardArr, setLikedProdsArr, likedProdsArr}) => {
    openCakesModal || openSandwichModal || openCookiesModal || openBreadModal 
    ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    const add2card = (name, price, img) => {
      let product = {
        prodName: name,
        prodPrice: price,
        prodImg: img,
        prodId: Math.floor(Math.random()*1000000)
      }
      const updatedCard = [...cardArr, product]
      setCardArr(updatedCard)
    }
    const likeProduct = (likedProductName, likedProductPrice, likedProductImg) => {
      let likedProductObj = {
        likedName: likedProductName,
        likedPrice: likedProductPrice,
        likedImg: likedProductImg,
        likedId: Math.floor(Math.random()*1000000)
      }
      const updatedLikedArr = [...likedProdsArr, likedProductObj]
      setLikedProdsArr(updatedLikedArr)
    }
  return (
    <motion.div 
    animate={{y: openCakesModal || openSandwichModal || openCookiesModal || openBreadModal ? -600 : 600}}
    transition={{type: 'tween', duration: .3}}
    className='products-modal'>
        {openCakesModal && 
        <div>
          <h1>Cakes</h1>
          <i class="fa-solid fa-xmark close" onClick={() => setOpenCakesModal(false)}></i>
          <div className='products'>
            {ProdData.data['cake-products'].map((prod) => {
              return <ProductInModal prod={prod} add2card={add2card} likeProduct={likeProduct} likedProdsArr={likedProdsArr} 
              setLikedProdsArr={setLikedProdsArr} />
            })}
          </div>
        </div>}
        {openSandwichModal && 
        <div>
          <h1>Sandwiches</h1>
          <i class="fa-solid fa-xmark close" onClick={() => setOpenSandwichModal(false)}></i>
          <div className='products'>
            {ProdData.data['sandwich-products'].map((prod) => {
              return <ProductInModal prod={prod} add2card={add2card} likeProduct={likeProduct} likedProdsArr={likedProdsArr} 
              setLikedProdsArr={setLikedProdsArr} />
            })}
          </div>
        </div>}
        {openCookiesModal && 
        <div>
          <h1>Cookies</h1>
          <i class="fa-solid fa-xmark close" onClick={() => setOpenCookiesModal(false)}></i>
          <div className='products'>
            {ProdData.data['cookies-products'].map((prod) => {
              return <ProductInModal prod={prod} add2card={add2card} likeProduct={likeProduct} likedProdsArr={likedProdsArr} 
              setLikedProdsArr={setLikedProdsArr} />
            })}
          </div>
        </div>}
        {openBreadModal && 
        <div>
          <h1>Bread</h1>
          <i class="fa-solid fa-xmark close" onClick={() => setOpenBreadModal(false)}></i>
          <div className='products'>
            {ProdData.data['bread-products'].map((prod) => {
              return <ProductInModal prod={prod} add2card={add2card} likeProduct={likeProduct} likedProdsArr={likedProdsArr} 
              setLikedProdsArr={setLikedProdsArr} />
            })}
          </div>
        </div>}
    </motion.div>
  )
}

export default CakesModal
