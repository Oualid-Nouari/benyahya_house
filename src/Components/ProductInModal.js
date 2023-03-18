import React, { useEffect, useState } from 'react'

const ProductInModal = ({prod, add2card, likeProduct, likedProdsArr, setLikedProdsArr}) => {
    const [liked, setLiked] = useState(false)
    const deleteFromLiked = (name) => {
        let updatedLikedArr = [...likedProdsArr].filter((prod) => prod.likedName !== name)
        setLikedProdsArr(updatedLikedArr);
      }
      const removeToLikes = () => {
        setLiked(false)
        deleteFromLiked(prod.name)
      }
      const addToLikes = () => {
        likeProduct(prod.name, prod.price, prod.img)
        setLiked(true)
      }
      useEffect(() => {
        likedProdsArr.map((produit) => {
          if (produit.likedName === prod.name) {
            setLiked(true)
          }
        })
      }, [])
  return (
    <div>
      <div className='product' key={prod.id}>
            <img src={prod.img} alt="" width="110px" height="80px" style={{padding: "10px "}} />
            <div className='product-details'>
                <p className='prod-name'>{prod.name}</p>
                <p className="price">{prod.price}DH</p>
            </div>
            <div className='addlike-product'>
                <button className='add2card' onClick={() => add2card(prod.name, prod.price, prod.img)}>Add to card</button>
                {!liked && <i class="fa-regular fa-heart" onClick={addToLikes}></i>}
                {liked && <i class="fa-solid fa-heart" style={{color: "brown"}} onClick={removeToLikes}></i>}
            </div>
        </div>
    </div>
  )
}

export default ProductInModal
