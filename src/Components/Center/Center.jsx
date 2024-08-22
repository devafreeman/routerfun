import React from 'react'
import { useOutlet} from 'react-router-dom'
import Landing from '../landing/landing'
import './center.css'

const Center = () => {

    const outlet = useOutlet();

    return (
        <>
        
        {console.log('outlet', outlet ? true : false)}
        
        <div id='centerContainer' className='routeBorder'>
            {outlet ? outlet : <Landing />}
            </div>
            </>
    )
}

export default Center