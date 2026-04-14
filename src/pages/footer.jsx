import React from 'react'

function Footer() {
  return (
    <>
     <div className='md:px-27 p-5 bg-gray-950/80 md:py-7 py-2 flex justify-between border-t border-gray-500/40'>
        <p  className='text-white/50 text-[15px]'>© 2024 Timothée Kouassi. Tous droits réservés.</p>
        <p  className='text-white/50 text-[15px]'>Construit avec <span className='text-teal-500' >React </span>& <span className='text-teal-500' >Tailwind CSS</span></p>
      </div>
    </>
  )
}

export default Footer
