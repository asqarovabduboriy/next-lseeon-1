import React from 'react'
import './Category.css'
import Image from 'next/image'
import imageone from '../../assets/imgs/Icon.png'
import imagetwo from '../../assets/imgs/Icon (1).png'
import imagethree from '../../assets/imgs/economy (1).png'
import imagefour from '../../assets/imgs/cyborg.png'


const Category = () => {
  return (
    <>
     <div className='container'>
             <h1 style={{textAlign:"center"}}> Choose A Catagory</h1>

             <div className='category__container'>
               <div className='category'>
                 <div className='category__image'>
                   <Image src={imageone} alt="image" width={30} height={30} />   
                 </div>
                  <h3>Business</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>

               <div className='category'>
                 <div className='category__image'>
                   <Image src={imagetwo} alt="image" width={30} height={30} />   
                 </div>
                  <h3>Startup</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>


               <div className='category'>
                 <div className='category__image'>
                   <Image src={imagethree} alt="image" width={30} height={30} />   
                 </div>
                  <h3>Startup</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>

               <div className='category'>
                 <div className='category__image'>
                   <Image src={imagefour} alt="image" width={30} height={30} />   
                 </div>
                  <h3>Technology</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>
             </div>
     </div>
    </>
  )
}

export default Category