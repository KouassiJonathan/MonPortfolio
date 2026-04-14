import React from 'react'
import HeroImg from "../assets/Hero.jpg";
import { Link } from 'react-router-dom';
function Hero() {
  return (

    <>
      {/*couleur de font + conteneur*/}
      < div id='Hero' className="md:px-27 px-8 bg-gray-950/80 md:py-6 py-6 ">

        <div className="grid md:grid-cols-2 grid-cols-1">

          {/*colonne text et bouton*/}
          <div className="md:flex md:flex-col">

            {/*text*/}
            <div>
              <p data-aos="fade-right" className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[19px] font-bold'>Bonjour, je suis</p>
              <h1 data-aos="fade-left" className='md:text-[55px] text-2xl mt-2'>
                Timothee
                <span className='md:text-[55px] text-2xl bg-linear-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent font-bold ms-2'>
                  Kouassi
                </span>
              </h1>

              <h3 data-aos="fade" className='text-gray-500 md:text-2xl text-xl md:w-120 mt-3'>
                Développeur Fullstack passionné par le web moderne
              </h3>
              <p  data-aos="fade" className='text-gray-500 md:text-[17px] text-xl md:w-120 mt-5'>Je conçois et développe des applications web performantes, élégantes et accessibles. De l'idée au déploiement,
                je transforme vos projets en réalité.</p>
            </div>
            {/*bouton*/}
            <div className='flex gap-4 mt-8 mb-6 text-center'>
              <Link  data-aos="fade-right" to='/Contact' className='bg-teal-500 w-40 text-[18px] py-2 text-gray-900 rounded-[13px] hover:bg-teal-600 duration-200 transition'>Me contacter</Link>
              <Link  data-aos="fade-left" to='/Project' className='bg-gray-950/80 w-43 text-[18px] py-2 text-white/80  rounded-[13px] border-gray-900 border hover:border-teal-500/70 duration-200 transition'>Voir Mes Projets</Link>
            </div>
            {/*icon*/}
            <div  data-aos="fade">
              <a href="https://github.com/KouassiJonathan" className='me-5'><i className="bi bi-github text-white/50 text-[17px]  hover:text-teal-500 duration-200 transition"></i></a>
              <a href="https://www.linkedin.com/in/timothée-kouassi-a905b72aa " className='me-5'><i className="bi bi-linkedin text-[17px] text-white/50 hover:text-teal-500 duration-200 transition"></i></a>
              <a href="#" className='me-5'><i className="bi bi-twitter-x text-[17px] text-white/50 hover:text-teal-500 duration-200 transition"></i></a>
            </div>
          </div>

          {/*colonne image*/}
          <div className='relative flex justify-center '>
            <img src={HeroImg} alt="Photo de Timothee Jonathan" className="md:w-100 md:h-100 w-50 h-50  rounded-full md:absolute md:left-30 shadow-sky-200 shadow-2xl bounce-inside " />
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero
