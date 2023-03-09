import {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../Firebase.config'
import Spinner from '../Components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'

const Listing = () => {
    
    const [listing, setListing] = useState(null)
    const [shareLinkCopied, setShareLinkCopied ]= useState(false)
    const [loading, setLoading] = useState(true)

  const  nav = useNavigate()
  const params = useParams()
  const auth = getAuth()


useEffect(()=>{
    const fetchLinsting = async () =>{
        const docRef = doc(db, 'listings', params.listingId)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            
            setListing(docSnap.data())
            setLoading(false)
        }
    }

    fetchLinsting()
}, [nav, params.listingId])


    if(loading){
        return <Spinner/>
}

  return <main>
    {/* slider */}

    <div className="shareIconDiv" onClick={()=>{
        navigator.clipboard.writeText(window.location.href)
        setShareLinkCopied(true)
        setTimeout(()=>{
            setShareLinkCopied(false)
        }, 2000)
    }}>
        <img src={shareIcon} alt="" />
    </div>
    
    {shareLinkCopied && <p className='linkCopied'>Link Copied!</p>}

    <div className="listingDetails">
        <p className="listingName">
            {listing.name} - ${listing.offer ? 
            listing.discountedPrice.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : listing.regularPrice.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>

        <p className="listingLocation">{listing.location}</p>
        <p className="listingType">
            for {listing.type === 'rent' ? 'Rent' : 'Sale'}
        </p>
        {listing.offer && (
            <p className="discountPrice">
                ${listing.regularPrice - listing.discountedPrice} discount
            </p>
        )}


        <ul className="listingDetailsList">
            <li>
                {listing.bedrooms > 1 ? `${listing.bedrooms} bedrooms` :
                '1 bedroom'}
            </li>
            <li>
                {listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms` :
                '1 bathroom'}
            </li>
            <li>{listing.parking && 'Parking Spot'}</li>
            <li>{listing.furnished && 'Furnished'}</li>
        </ul>

        <p className="listingLocationTitle">Location</p>


        {auth.currentUser?.uid !== listing.userref && (
            <Link to={`/contact/${listing.userref}?
            listingName=${listing.name}`} className='primaryButton'>Contact landlord</Link>
        )}
    </div>
  </main>
}

export default Listing