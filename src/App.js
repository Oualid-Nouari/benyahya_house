import './App.css';
import Home from './Sections/Home';
import Products from './Sections/Products';
import CakesModal from './Components/CakesModal';
import { useState } from 'react';
import CardModal from './Components/CardModal';
import LikedProducts from './Components/LikedProducts';
import Footer from './Sections/Footer';
function App() {
  const [openCakesModal, setOpenCakesModal] = useState(false)
  const [openSandwichModal, setOpenSandwichModal] = useState(false)
  const [openCookiesModal, setOpenCookiesModal] = useState(false)
  const [openBreadModal, setOpenBreadModal] = useState(false)
  const [openCard, setOpenCard] = useState(false)
  const [cardArr, setCardArr] = useState([])
  const [likedProdsArr, setLikedProdsArr] = useState([])
  const [openLikedProdsModal, setOpenLikedProdsModal] = useState(false)
  return (
    <div className="App">
      <LikedProducts
        setOpenLikedProdsModal={setOpenLikedProdsModal}
        likedProdsArr={likedProdsArr}
        openLikedProdsModal={openLikedProdsModal}
        setLikedProdsArr={setLikedProdsArr}
      />

      <CakesModal
        openCakesModal={openCakesModal}
        setOpenCakesModal={setOpenCakesModal}
        openSandwichModal={openSandwichModal}
        setOpenSandwichModal={setOpenSandwichModal}
        openCookiesModal={openCookiesModal}
        setOpenCookiesModal={setOpenCookiesModal}
        openBreadModal={openBreadModal}
        setOpenBreadModal={setOpenBreadModal}
        setCardArr={setCardArr}
        cardArr={cardArr}
        likedProdsArr={likedProdsArr}
        setLikedProdsArr={setLikedProdsArr}
        openLikedProdsModal={openLikedProdsModal}
      />

      {openCard &&
        <CardModal
          setOpenCard={setOpenCard}
          cardArr={cardArr}
          openCard={openCard}
          setCardArr={setCardArr}
        />
      }
      <Home
        setOpenCard={setOpenCard}
        cardArr={cardArr}
        setOpenLikedProdsModal={setOpenLikedProdsModal}
      />

      <Products
        setOpenCakesModal={setOpenCakesModal}
        setOpenSandwichModal={setOpenSandwichModal}
        setOpenCookiesModal={setOpenCookiesModal}
        setOpenBreadModal={setOpenBreadModal}
        setOpenLikedProdsModal={setOpenLikedProdsModal}
      />
      <Footer />
    </div>
  );
}

export default App;

