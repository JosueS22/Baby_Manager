import React from 'react';

import './styles.css'
import Babies from '../Babies';
import Events from '../Events';

const BabiesWithEvents = () =>(
    <div className= 'baby-events-container'>
        <Babies/>
        <Events/>
    </div>
)

export default BabiesWithEvents