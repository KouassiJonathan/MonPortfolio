import React from 'react'

function Project() {
    return (
        <>

            <div className='md:px-27 px-8 bg-gray-950/50 md:py-20 py-6 md:pt-26 '>
                {/*text*/}
                <div data-aos="fade-up">
                    <h3 className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[15px]  uppercase '>Portfolio</h3>
                    <h2 className='text-4xl mt-1 font-bold'>Projets récents</h2>
                </div>
                {/*carte sur deux colonne*/}
                <div className='grid md:grid-cols-2 grid-cols-1 mt-10 gap-5 '>
                   {/*colonne2 carte 4*/}
                    <div data-aos="fade-up" className="bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-50 h-70 to-gray-800 p-5 hover:border-teal-500/30 duration-200 ">
                        {/*header*/}
                        <div className='flex justify-between'>
                            <h5 className='text-white/85 font-bold text-xl'>FinTrack Dashboard</h5>
                            {/*icon*/}
                            <div>
                                <a href="https://github.com/KouassiJonathan" className='me-5'><i class="bi bi-github text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                                <a href="#"><i class="bi bi-box-arrow-up-right text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                            </div>
                        </div>
                        {/*body*/}
                        <div>
                            <p className='text-gray-500 md:text-[17px] text-xl'>Dashboard analytics financier avec visualisation de données
                                en temps réel et rapports exportables.
                            </p>
                        </div>
                        {/*footer*/}
                        <div className='text-center flex flex-col md:flex-row gap-2 md:items-center'>
                            <div className='flex'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3  font-bold text-[13px]'>React</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Node.js</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>MongoDB</h6>
                            </div>
                           
                            <div className='flex'>
                                 <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Stripe</h6>
                                <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Tailwind CSS</h6>
                            </div>
                           
                        </div>
                    </div>

                   {/*colonne2 carte 4*/}
                    <div data-aos="fade-up" className="bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-50 h-70 to-gray-800 p-5 hover:border-teal-500/30 duration-200 transition">
                        {/*header*/}
                        <div className='flex justify-between'>
                            <h5 className='text-white/85 font-bold text-xl'>FinTrack Dashboard</h5>
                            {/*icon*/}
                            <div>
                                <a href="https://github.com/KouassiJonathan" className='me-5'><i class="bi bi-github text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                                <a href="#"><i class="bi bi-box-arrow-up-right text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                            </div>
                        </div>
                        {/*body*/}
                        <div>
                            <p className='text-gray-500 md:text-[17px] text-xl'>Dashboard analytics financier avec visualisation de données
                                en temps réel et rapports exportables.
                            </p>
                        </div>
                        {/*footer*/}
                        <div className='text-center flex flex-col md:flex-row gap-2 md:items-center'>
                            <div className='flex'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3  font-bold text-[13px]'>React</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Node.js</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>MongoDB</h6>
                            </div>
                           
                            <div className='flex'>
                                 <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Stripe</h6>
                                <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Tailwind CSS</h6>
                            </div>
                           
                        </div>
                    </div>


                    {/*colonne2 carte 4*/}
                    <div data-aos="fade-up" className="bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-50 h-70 to-gray-800 p-5 hover:border-teal-500/30 duration-200 transition">
                        {/*header*/}
                        <div className='flex justify-between'>
                            <h5 className='text-white/85 font-bold text-xl'>FinTrack Dashboard</h5>
                            {/*icon*/}
                            <div>
                                <a href="https://github.com/KouassiJonathan" className='me-5'><i class="bi bi-github text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                                <a href="#"><i class="bi bi-box-arrow-up-right text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                            </div>
                        </div>
                        {/*body*/}
                        <div>
                            <p className='text-gray-500 md:text-[17px] text-xl'>Dashboard analytics financier avec visualisation de données
                                en temps réel et rapports exportables.
                            </p>
                        </div>
                        {/*footer*/}
                        <div className='text-center flex flex-col md:flex-row gap-2 md:items-center'>
                            <div className='flex'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3  font-bold text-[13px]'>React</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Node.js</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>MongoDB</h6>
                            </div>
                           
                            <div className='flex'>
                                 <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Stripe</h6>
                                <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Tailwind CSS</h6>
                            </div>
                           
                        </div>
                    </div>

                    {/*colonne2 carte 4*/}
                    <div data-aos="fade-up" className="bg-gray-950/50 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-50 h-70 to-gray-800 p-5 hover:border-teal-500/30 duration-200 transition">
                        {/*header*/}
                        <div className='flex justify-between'>
                            <h5 className='text-white/85 font-bold text-xl'>FinTrack Dashboard</h5>
                            {/*icon*/}
                            <div>
                                <a href="https://github.com/KouassiJonathan" className='me-5'><i class="bi bi-github text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                                <a href="#"><i class="bi bi-box-arrow-up-right text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                            </div>
                        </div>
                        {/*body*/}
                        <div>
                            <p className='text-gray-500 md:text-[17px] text-xl'>Dashboard analytics financier avec visualisation de données
                                en temps réel et rapports exportables.
                            </p>
                        </div>
                        {/*footer*/}
                        <div className='text-center flex flex-col md:flex-row gap-2 md:items-center'>
                            <div className='flex'>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3  font-bold text-[13px]'>React</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Node.js</h6>
                            <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>MongoDB</h6>
                            </div>
                           
                            <div className='flex'>
                                 <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Stripe</h6>
                                <h6 className='text-teal-500 rounded-full border border-teal-900/30 py-2 px-3 font-bold text-[13px]'>Tailwind CSS</h6>
                            </div>
                           
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Project
