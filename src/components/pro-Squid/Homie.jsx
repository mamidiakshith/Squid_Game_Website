import React from 'react'
import './Homie.css'
import { useContext } from 'react';
import { counterobj } from '../../CounterContext';
function Homie() {
    const { count } = useContext(counterobj);
  return (
    <div>
        <div className='b1'>
        <img src="https://www.pngplay.com/wp-content/uploads/13/Squid-Game-Official-Logo-PNG.png" className='bi1' alt="" />
        <p className='bp1'>Welcome to Squid game.... </p>
        <p className='bp2'>Please fill up your registrations .Remaining slots-{count}</p>
        <img src="https://youtooz.com/cdn/shop/products/squidgame_maskedsoldier_characterai_el_447x1000trim_min-59nn.png?v=1682394762" className='bi2' alt="" />
                <img src="https://youtooz.com/cdn/shop/products/squidgame_maskedsoldier_characterai_el_447x1000trim_min-59nn.png?v=1682394762" className='bi3' alt="" />
        <img src="https://youtooz.com/cdn/shop/products/squidgame_maskedsoldier_characterai_el_447x1000trim_min-59nn.png?v=1682394762" className='bi4' alt="" />

        <img src="https://cdnb.artstation.com/p/assets/covers/images/042/733/063/large/jaeyeon-nam-jaeyeon-nam-squidgame-frontman-pink-close.jpg?1635297961" className='bi5' alt="" />
    </div>
    </div>
  )
}

export default Homie