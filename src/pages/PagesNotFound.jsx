import React from 'react'

function PagesNotFound() {
  return (
    <div className='mb-46 flex flex-col gap-5 justify-center items-center '>
      <h1 className='md:text-8xl text-6xl py-8 md:pt-20  '>Erreur 404 </h1>
     <a href="/" className='bg-teal-500 px-3 text-[18px] py-2  text-gray-900 rounded  hover:bg-teal-600 duration-200 transition font-bold'>Aller à la Page d'Accueill</a>
    </div>
  )
}

export default PagesNotFound
