
import "aos/dist/aos.css";

    function About() {
     
        return (
            <> {/*text*/}
                <div id="About" className='md:px-27 px-8 bg-gray-950/80 md:py-6 py-6 md:pt-6'>
                    <h3 className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-2xl  '>À propos</h3>
                    <h2 data-aos="fade-up" className=' text-4xl mt-1 font-bold'>Qui suis-je ?</h2>
                    <p data-aos="fade-up" className='text-gray-500 md:text-xl text-xl md:w-150 mt-5 '>Développeur fullstack , je suis spécialisé dans la création d'applications
                        web modernes avec React, Node.js et les technologies cloud. Passionné par le clean code et l'expérience utilisateur, je m'efforce de livrer
                        des solutions performantes et
                        maintenables
                    </p>
                    {/*text+logo*/}
                    <div className='mt-10 border-s border-gray-700 relative flex flex-col gap-10 '>
                        {/*item 1*/}
                        <div data-aos="fade-left" className=' flex gap-8 '>
                            {/*logo*/}
                            <div className=' '>
                                <i class="bi bi-suitcase-lg text-[12px] border-2 mt-2 rounded-full px-1 absolute -left-3 text-teal-300"></i>
                            </div>
                            {/*text*/}
                            <div>
                                <h5 className='text-teal-300 '>2026 - Présent</h5>
                                <p className='text-white/80 mt-1 font-bold text-[18px]'>Lead Développeur Fullstack</p>
                                <p className='text-gray-600 mt-1 font-bold text-[15px]'>TechVision SAS</p>
                            </div>
                        </div>
                        {/*item 2*/}
                        <div data-aos="fade-left" className=' flex gap-8'>
                            {/*logo*/}
                            <div className=' '>
                                <i class="bi bi-code-slash text-[12px] border-2 mt-2 rounded-full px-1 absolute -left-3 text-teal-300"></i>
                            </div>
                            {/*text*/}
                            <div>
                                <h5 className='text-teal-300 '>2025 - 2026</h5>
                                <p className='text-white/80 mt-1 font-bold text-[18px]'>Développeur Fullstack</p>
                                <p className='text-gray-600 mt-1 font-bold text-[15px]'>Agence WebFlow</p>
                            </div>
                        </div>
                        {/*item 3*/}
                        <div data-aos="fade-left" className=' flex gap-8'>
                            {/*logo*/}
                            <div className=' '>
                                <i class="bi bi-code-slash text-[12px] border-2 mt-2 rounded-full px-1 absolute -left-3 text-teal-300"></i>
                            </div>
                            {/*text*/}
                            <div>
                                <h5 className='text-teal-300 '>2024 - 2025</h5>
                                <p className='text-white/80 mt-1 font-bold text-[18px]'>Développeur Frontend Junior</p>
                                <p className='text-gray-600 mt-1 font-bold text-[15px]'>StartupLab</p>
                            </div>
                        </div>
                        {/*item 4*/}
                        <div data-aos="fade-left" className=' flex gap-8'>
                            {/*logo*/}
                            <div className=' '>
                                
                                <i class="bi bi-mortarboard text-[12px] border-2 mt-2 rounded-full px-1 absolute -left-3 text-teal-300"></i>
                            </div>
                            {/*text*/}
                            <div>
                                <h5 className='text-teal-300 '>2023 - 2024</h5>
                                <p className='text-white/80 mt-1 font-bold text-[18px]'>BTS en Informatique Developpeur D'application</p>
                                <p className='text-gray-600 mt-1 font-bold text-[15px]'>Université Privé ESTIME</p>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }

    export default About
