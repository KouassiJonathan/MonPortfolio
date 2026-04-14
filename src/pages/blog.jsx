import React from 'react'

function Blog() {
    return (
        <>
            <div id='Blog' className='md:px-27 px-8 bg-gray-950/50 md:py-20 py-6 md:pt-6 '>
                {/*text*/}
                <div className='mb-10'>
                    <h3 data-aos="fade-up" className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[15px]  uppercase '>Blog</h3>
                    <h2 data-aos="fade-up" className='text-4xl mt-1 font-bold'>Articles récents</h2>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    {/*carte 1*/}
                    <div  data-aos="fade-left"  className=" bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-65 h-68 to-gray-800 p-5 group hover:border-teal-500/50 duration-200 transition">

                        <div className='mb-0'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 w-15 font-bold text-[13px] mb-3'>React</h6>
                            <h5 className='text-white/85 font-bold text-[16px] m-0 p-0 mb-3'>Optimiser les performances React avec useMemo et useCallback</h5>
                       
                            <p className='text-[15px] text-white/40'>Découvrez quand et comment utiliser ces hooks pour éviter les re-renders inutiles dans vos applications React.</p>
                        </div>
                        {/*footer*/}
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                 <i class="bi bi-calendar-check text-[15px] text-white/40"></i>
                                 <h6 className='text-[15px] text-white/40'>15 Août Juin</h6>
                            </div>
                            <div className='flex items-center justify-center'>
                                <h6 className='text-[15px] group-hover:text-teal-500 text-transparent'>lire</h6>
                                <i class="bi bi-arrow-right-short mt-1 group-hover:text-teal-500 text-transparent"></i>
                            </div>
                            
                        </div>
                    </div>
                    {/*carte 2*/}
                    <div  data-aos="fade-left" className=" bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-65 h-68 to-gray-800 p-5 group hover:border-teal-500/50 duration-200 transition">

                        <div className='mb-0'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 w-19 font-bold text-[13px] mb-3'>Backend</h6>
                            <h5 className='text-white/85 font-bold text-[16px] m-0 p-0 mb-3'>Architecture microservices avec Node.js et Docker</h5>
                       
                            <p className='text-[15px] text-white/40'>Guide pratique pour décomposer une application monolithique en microservices scalables.</p>
                        </div>
                        {/*footer*/}
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                 <i class="bi bi-calendar-check text-[15px] text-white/40"></i>
                                 <h6 className='text-[15px] text-white/40'>28 Août 2026</h6>
                            </div>
                            <div className='flex items-center justify-center'>
                                <h6 className='text-[15px] group-hover:text-teal-500 text-transparent'>lire</h6>
                                <i class="bi bi-arrow-right-short mt-1 group-hover:text-teal-500 text-transparent"></i>
                            </div>
                            
                        </div>
                    </div>
                     {/*carte 3*/}
                    <div data-aos="fade-left"  className=" bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-65 h-68 to-gray-800 p-5 group hover:border-teal-500/50 duration-200 transition">

                        <div className='mb-0'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 w-13 font-bold text-[13px] mb-3'>CSS</h6>
                            <h5 className='text-white/85 font-bold text-[16px] m-0 p-0 mb-3'>Tailwind CSS v4 : les nouveautés à connaître</h5>
                       
                            <p className='text-[15px] text-white/40'>Tour d'horizon des fonctionnalités majeures de Tailwind CSS v4 et comment migrer vos projets.</p>
                        </div>
                        {/*footer*/}
                        <div className='flex justify-between'>
                            <div className='flex gap-2 mt-5'>
                                 <i class="bi bi-calendar-check text-[15px] text-white/40"></i>
                                 <h6 className='text-[15px] text-white/40'>28 Août 2026</h6>
                            </div>
                            <div className='flex items-center justify-center mt-5 '>
                                <h6 className='text-[15px] group-hover:text-teal-500 text-transparent'>lire</h6>
                                <i class="bi bi-arrow-right-short mt-1 group-hover:text-teal-500 text-transparent"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog
