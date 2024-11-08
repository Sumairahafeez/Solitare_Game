import React from 'react'
import foundation from '../Backend/Foundation.js'
function Foundations({foundation}) {
  console.log("Foundations in foundation",foundation)
  if (!foundation) {
    return null;
  }
  const HandleDrop = (event,toPileIndex) =>
  {
      const cardData = event.dataTransfer.getData('card');
      if(cardData)
      {
        const card = JSON.parse(cardData);
      }
  }
  return(
    <div className='w-[50%] h-[95%] flex flex-row gap-6  items-center justify-center'>
        {  foundation.foundation.map((foundation,foundationIndex)=>(
          <div className='w-40 h-[95%] border  border-gray-700 rounded-md' onDrop={(event)=>HandleDrop()}></div>))
        }
    </div>
        
  )
}

export default Foundations