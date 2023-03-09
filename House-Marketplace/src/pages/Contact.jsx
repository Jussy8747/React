import {useEffect, useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { db } from '../Firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import {toast} from 'react-toastify'

const Contact = () => {

    const [message, setmassege] = useState('')
    const [landlord, setlandlord] = useState(null)
    const [searchParam, setSearchParam] = useSearchParams()

    const params = useParams()

    useEffect(()=>{
        const getLandlord = async () => {
            const docRef = doc(db, 'users', params.landlordId)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                setlandlord(docSnap.data())
            }else(
                toast.error('Could not get Landlord data')
            )
        }

        getLandlord()
    }, [params.loadlordId])

    const onChange =(e)=>{
    setmassege(e.target.value)
    }
  return (
    <div className="pageContainer">
        <header>
            <p className="pageHeader">
                Contact Landlord
            </p>
        </header>

        {landlord !== null && (
            <main>
                <div className="contactLandlord">
                    <p className="landlordName">
                        Contact {landlord?.name}
                    </p>
                </div>

                <form className="messageForm">
                    <div className="messageDiv">
                        <label htmlFor='message' className='messageLabel'>
                            Message
                        </label>

                        <textarea name="message" id="message"
                        className='textarea'
                         value={message}
                        onChange={onChange}></textarea>
                    </div>

                    <a href={`mailto:${landlord.email}?
                    subject=${searchParam.get('listingName')}$
                    body=${message}`}>
                        <button type='button' className='primaryButton'>
                            Send Message
                        </button>
                    </a>
                </form>
            </main>
        )}
    </div>
  )
}

export default Contact