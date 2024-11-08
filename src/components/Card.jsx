import React from 'react'
function card({suit,rank,faceUp,onClick,draggable,onDragStart}) {
    let Imageurl = faceUp?
    require= `../assets/${suit}-${rank}.png`
    :
    require = '../assets/card-back.png'
  return (
    faceUp?
    <div className='w-32 h-44 bg-gray-800 bg-contain' onClick={onClick} draggable onDragStart={onDragStart} 
    style={{
        backgroundImage: `url(${require(`../assets/${suit}-${rank}.png`)})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
       }>
        {/* <img className='w-60 h-32 border-blue-900 rounded-md' src = {Imageurl} alt=""/> */}
    </div>
    :
    <div className=' w-32 h-44 bg-gray-100 bg-cover'  style={{ backgroundImage: `url(${require('../assets/card-back.png')})`}}>
    </div>
  )
}

export default card