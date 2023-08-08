import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../Firebase.config'
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Spinner from './Spinner'
import { async } from '@firebase/util'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = () => {

    const [loading, setLoading] = useState(true)
    const [listing, setListing] = useState(null)

    const nav = useNavigate()


    useEffect(()=>{

        const fetchLinstings = async()=>{

        const listingRef = collection(db, 'listings')
        const q = query(listingRef, orderBy('timestamp', 'desc'), 
        limit(5))

        const querySnap = await getDocs(q)

        let listings = []

        querySnap.forEach(doc => {
         console.log(doc.data());
          return listings.push({
            id: doc.id,
            img: doc.data().imageUrl,
            data: doc.data()
            
          })  
        });
       

        setListing(listings)
        setLoading(false)
        
    }
    fetchLinstings()
    }, [])

    if(loading){
      return  <Spinner/>
    }
  return listing && (
    <>
    <p className="exploreHeading">Recommended</p>
  
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {listing.map(({data, img, id})=>(
        <SwiperSlide key={id} onClick={()=> nav(`/category/${data.type}/${id}`)}>
            <div
            style={{
                background: `url(${img[0]})
                 center no-repeat`,
                backgroundSize: 'cover',
                height: '200px'
                
              }}
    
            className="swiperSlideDiv">
                 <p className='swiperSlideText'>{data.name}</p>
                 <p className='swiperSlidePrice'>
                  ${data.discountedPrice ?? data.regularPrice}{' '}
                  {data.type === 'rent' && '/ month'}
                </p>
            </div>
        </SwiperSlide>
    ))}

{/* {listing.map(({img}) => (
          <SwiperSlide key='5678'>
            <div
              style={{
                background: `url(${img[0]})
                 center no-repeat`,
                backgroundSize: 'cover',
                height: '200px'
                
              }}
              className='swiperSlideDiv'
            >
             
            </div>
          </SwiperSlide>
          
        ))} */}
        


        
    
    </Swiper>
    
    </>
  )
}

export default Slider