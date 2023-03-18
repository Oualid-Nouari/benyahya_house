import React, {useEffect, useState} from 'react'

const CardModal = ({setOpenCard, cardArr, openCard, setCardArr}) => {
  openCard ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  const [totalCost, setTotalCost] = useState(0)
  useEffect(() => {
    function findSum() {
      let sum = 0;
      for(let i=0; i<cardArr.length; i++) {
        sum += cardArr[i].prodPrice;
      }
      setTotalCost(sum)
      }
      findSum()
  })
  const deleteFromCard = (id) => {
    let updatedCard = [...cardArr].filter((prod) => prod.prodId !== id)
    setCardArr(updatedCard);
  }
  return (
    <div className='overlay'>
        {cardArr.length === 0 ?
        <div className='empty-card-modal'>
        <i class="fa-solid fa-xmark close closeCard" onClick={() => setOpenCard(false)}></i>
          <p>The card is empty !</p>
        </div>:
        <div className='card-modal'>
        <i class="fa-solid fa-xmark closeCard" onClick={() => setOpenCard(false)}></i>
        <div className='cost'>
            <p>Total cost: {totalCost}DH</p>
        </div>
          <div className='prods-container-in-card'>
            {cardArr.map((prod) => {
              return (
                <div className='product' key={prod.id}>
                  <img src={prod.prodImg} alt='' width='50px' height='50px' />
                  <span className='prodInCardName'>{prod.prodName}</span>
                  <span className='prodInCardPrice'>{prod.prodPrice}DH</span>
                  <i class="fa-solid fa-trash trash" onClick={() => deleteFromCard(prod.prodId)}></i>
                </div>
              )
            })}
          </div>
          <div className='checkout'>
            <button>Checkout</button>
        </div>
        </div>
        }
    </div>
  )
}

export default CardModal
