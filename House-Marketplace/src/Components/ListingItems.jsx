import React from 'react'
import { Link } from 'react-router-dom'
//import {ReactComponent as deleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'
const ListingItems = ({list, id, ondelete}) => {
  return (
      <li className="categoryListing">
        <Link to={`/category/${list.type}/${id}`}
         className='categoryListingLink' >
          <img src={list.imageUrl[0]} alt={list.name} 
          className='categoryListingImg' />
          <div className="categoryListingDetails">
            <p className="categoryListingLocation">
              {list.location}
            </p>
            <p className="categoryListingName">
              {list.name}
            </p>
            <p className="categoryListingPrice">
              {list.offer ? `$${list.discountedPrice.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` :
              `$${list.regularPrice.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                {list.type === 'rent' && ' / Month'}
            </p>
            <div className="categoryListingInfoDiv">
              
             <p className="categoryListinInfoText">
              {list.bedrooms > 1 ? 
              `${list.bedrooms} Bedrooms` 
            : '1 /bedroom'}
             </p>

             <p className="categoryListinInfoText">
              {list.bathrooms > 1 ? 
              `${list.bathrooms} bathrooms` 
            : '1 /bathroom'}
             </p>

            </div>
          </div>
         </Link>

         {ondelete && (
        <div className='removeIcon' onClick={()=>{
          ondelete(list.id, list.name)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px"
          viewBox="0 0 24 24" width="24px" fill="rgb(231, 76, 60)">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 
         0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
         
         </div>)}
      </li>
    
  )
}

export default ListingItems