import React, { useContext } from 'react';
import { counterobj } from '../../CounterContext';
import './Regno.css'
function Regno() {
  const { count } = useContext(counterobj);

  return (
    <div>
      <h1 className='rh1'>You Are Player no #{count}</h1>
      <img src="https://cdnb.artstation.com/p/assets/covers/images/042/733/063/large/jaeyeon-nam-jaeyeon-nam-squidgame-frontman-pink-close.jpg?1635297961" className='ri5' alt="" />

    </div>
  );
}

export default Regno;
