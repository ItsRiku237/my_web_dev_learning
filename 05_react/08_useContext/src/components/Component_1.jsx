import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component_1 = () => {

    const counter = useContext(counterContext)

    return (
        <div className='component'>
            {/* {counter} */}
            I am Component_1 counter  {counter.count}
        </div>
    )
}

export default Component_1
