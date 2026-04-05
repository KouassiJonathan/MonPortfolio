import React from 'react'

function Contact() {
    return (
        <>
            <div id='Contact' className='md:px-27 p-5 bg-gray-950/80 md:py-6 py-2 md:pt-26 page'>
                {/*text*/}
                <div>
                    <h3 className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[15px]  uppercase '>Contact</h3>
                    <h2 className='md:text-4xl text-3xl mt-1 font-bold mb-10'>Travaillons ensemble</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-15'>
                    {/*colonne 1 : formulaire*/}
                    <div  data-aos="fade-right" className='mx-10 md:mx-0 flex flex-col gap-5'>
                        <input className='input w-full rounded-lg text-[18px] focus:outline-0 focus:border-teal-500 h-11 ' type="text" placeholder='Votre nom' />
                        <input className='input w-full rounded-lg text-[18px] focus:outline-0 focus:border-teal-500 h-11 ' type='email' placeholder='Votre mail' />
                        <textarea name="text" id="text" className='textarea w-full rounded-lg text-[18px] focus:outline-0 focus:border-teal-500 h-35' placeholder='Votre message'></textarea>
                        <button className='bg-teal-500 w-35 h-12 text-gray-950/83 font-bold rounded-2xl  items-center flex justify-center gap-2 pe-2 hover:bg-teal-600 transition duration-200'><i class="bi bi-send"></i> Envoyer</button>
                    </div>
                    {/*colonne 2 : coordonée*/}
                    <div  data-aos="fade-left" className='flex flex-col gap-3 ms-10 md-ms-0 '>
                        <h3 className='text-white/90 text-xl mt-2'>Coordonnées</h3>
                        <p className='text-white/50 flex items-center  gap-2'><i class="bi bi-envelope mt-1 text-teal-500 "></i>jtkouassi@gmail.com</p>
                        <p className='text-white/50 flex items-center gap-2'><i class="bi bi-geo-alt text-teal-500"></i>Abidjan,Côte d'Ivoire</p>
                        <h3 className='text-white/90 text-xl mt-2 mb-5'>Réseaux sociaux</h3>
                        {/*icon */}
                        <div flex gap-5  >
                            <a href="https://github.com/KouassiJonathan" className='me-5 bg-gray-800/50 p-3 rounded-xl'><i class="bi bi-github text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
                            <a href="#" className='me-5 bg-gray-800/40 p-3 rounded-xl'><i class="bi bi-linkedin text-[17px] text-2xl text-white/50 hover:text-teal-500 duration-200 transition"></i></a>
                            <a href="#" className='me-5 bg-gray-800/40 p-3 rounded-xl '><i class="bi bi-twitter-x text-[17px]  text-white/50 hover:text-teal-500 duration-200 transition"></i></a>
                        </div>
                        <div className='bg-gray-800/40 md:w-135 md:h-18 w-70 5-90 rounded-xl mt-5 md:p-3 p-5 mb-5'>
                            <p className='text-white/50 text-[15px] '><i class="bi bi-lightbulb text-xl text-teal-500"></i> Disponible pour des missions freelance et des collaborations. N'hésitez pas à me contacter pour discuter de votre projet !</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
