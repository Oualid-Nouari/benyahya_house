import Cake from '../imgs/cake-img.png'
import Sandwich from '../imgs/sandwich.png'
import Cookies from '../imgs/cookies.png'
import Bread from '../imgs/bread.png'
const Products = ({setOpenCakesModal, setOpenSandwichModal, setOpenCookiesModal, setOpenBreadModal, setOpenLikedProdsModal}) => {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show')
  //     } else {
  //       entry.target.classList.remove('show')
  //     }
  //   })
  // })
  // const elements = document.querySelectorAll('.hidden')
  // elements.forEach((el) => observer.observe(el));
  const cakeClick = () => {
      setOpenCakesModal(true); setOpenSandwichModal(false); setOpenCookiesModal(false); setOpenBreadModal(false); setOpenLikedProdsModal(false)
  }
  const sandwichClick = () => {
    setOpenCakesModal(false); setOpenSandwichModal(true); setOpenCookiesModal(false); setOpenBreadModal(false); setOpenLikedProdsModal(false)
  }
  const cookieClick = () => {
    setOpenCakesModal(false); setOpenSandwichModal(false); setOpenCookiesModal(true); setOpenBreadModal(false); setOpenLikedProdsModal(false)
  }
  const breadClick = () => {
    setOpenCakesModal(false); setOpenSandwichModal(false); setOpenCookiesModal(false); setOpenBreadModal(true); setOpenLikedProdsModal(false)
  }
  return (
        <section className='productsSection' id='productss'>
          <div className='products-section-container'>
            <h1 className='hidden'>Welcome to our store</h1>
            <small className='hidden'>In benyahya house we offer</small>
            <div className='products-container'>
              <div className='product hidden' onClick={cakeClick}>
                  <img src={Cake} alt='' width='50px' height='45px' />
                  <p className='title'>Cake</p>
              </div>
              <div className='product hidden' onClick={sandwichClick} >
                  <img src={Sandwich} alt='' width='50px' height='45px' />
                  <p className='title'>Sandwich</p>
              </div>
              <div className='product hidden' onClick={cookieClick} >
                  <img src={Cookies} alt='' width='50px' height='45px' />
                  <p className='title'>Cookies</p>
              </div>
              <div className='product hidden' onClick={breadClick} >
                  <img src={Bread} alt='' width='50px' height='35px' />
                  <p className='title'>Bread</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Products
