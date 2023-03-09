import React, {useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, orderBy
, limit, startAfter,  } from 'firebase/firestore'
import { db } from '../Firebase.config'
import {toast} from 'react-toastify'
import Spinner from '../Components/Spinner'
import { async } from '@firebase/util'
import ListingItems from '../Components/ListingItems'

const Offers= () => {

    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(()=>{
        const fetchListing = async ()=>{
            try {
                // Get reference
                const listingRef = collection(db, 'listings')

                // create query
                const q = query(listingRef, where('offer', '==',
                 true), orderBy('timestamp', 'desc'),
                 limit(10))

                //  
                 const querySnap = await getDocs(q)
                 let listings = []
                 querySnap.forEach((doc)=>{
                    listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    
                 })

                 setListing(listings)
                 setLoading(false)
            } catch (error) {
               toast.error('could not fect data')
            }
        }

        fetchListing()


    },[])

  return (
    <div className='category'>
        <header>
            <p className="pageHeader">
               offers
            </p>
        </header>

        {loading ? <Spinner/> : listing && listing.length > 0 ?
        <>
        <main>
            <ul className='categoryListings' >
                {listing.map(list =>(
                    <ListingItems key={list.id}
                    id={list.id} list={list.data}/>
                ))}
            </ul>
        </main>
        
        
        </> : <p>No current offer for now</p>}
    </div>
  )
}

export default Offers