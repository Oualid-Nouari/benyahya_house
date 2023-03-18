import React, { useState } from 'react'
import Pic1 from '../imgs/gallery/gall1.jpg'
import Pic2 from '../imgs/gallery/gall2_v-stretch.jpg'
import Pic3 from '../imgs/gallery/gall3_h-stretch.jpg'
import Pic4 from '../imgs/gallery/gall4.jpg'
import Pic5 from '../imgs/gallery/gall5.jpg'
import Pic6 from '../imgs/gallery/gall17_h-stretch.jpg'
import Pic7 from '../imgs/gallery/gall7_big-stretch.jpg'
import Pic8 from '../imgs/gallery/gall21.jpg'
import Pic9 from '../imgs/gallery/gall9_h-stretch.jpg'
import { motion } from 'framer-motion'

const Gallery = () => {
    const [openGallery, setOpenGallery] = useState(false)
  return (
    <div className='gallery-section'>
      <h1>
        <i class="fa-solid fa-wand-magic-sparkles"></i> 
        Gallery 
        {openGallery ? <i class="fa-solid fa-chevron-up upANDdown" onClick={() => setOpenGallery(false)}></i> : <i class="fa-solid fa-chevron-down upANDdown" onClick={() => setOpenGallery(true)}></i>}
      </h1>
      <motion.div className='images' animate={{scale: openGallery ? 1 : 0, y: openGallery ? 0 : -300}} 
      transition={{type: 'tween', duration: .4}} style={{height: openGallery ? "100%" : 0}}>
        <div>
            <img src={Pic1} alt=''  />
        </div>
        <div className='v-stretch'>
            <img src={Pic2} alt=''  />
        </div>
        <div className='h-stretch'>
            <img src={Pic3} alt=''  />
        </div>
        <div>
            <img src={Pic4} alt=''  />
        </div>
        <div>
            <img src={Pic5} alt=''  />
        </div>
        <div className='v-stretch'>
            <img src={Pic6} alt=''  />
        </div>
        <div className='big-stretch'>
            <img src={Pic7} alt=''  />
        </div>
        <div>
            <img src={Pic8} alt=''  />
        </div>
        <div className='h-stretch'>
            <img src={Pic9} alt=''  />
        </div>
      </motion.div>
    </div>
  )
}

export default Gallery
