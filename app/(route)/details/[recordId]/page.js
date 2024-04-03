import React from 'react'
import MasterDetails from '../../../(route)/details/_components/MasterDetails'


function Details() {
  return (
    <div className='p-5 md:px-20'>
   <h2 className='font-bold text-[22px]'>Daten</h2>

   <div className='grid grid-col-1 md:grid-col-4 '>
     {/* Doctor details */}
    <div className='col-span-3 '>
     <MasterDetails/>
    </div>


    {/* Doctor suggestion */}
    <div className=''>

    </div>

   </div>
    
    </div>
  )
}

export default Details
