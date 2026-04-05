import React from 'react'

function Skills() {
    return (
        <>
            <div id='Skills' className='md:px-27 p-5 bg-gray-950/80 md:py-6 py-10 md:pt-26 '>
                {/*text*/}
                <div>
                    <h3 data-aos="fade-up" className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[15px]  uppercase '>Compétences</h3>
                    <h2  data-aos="fade-up" className='text-4xl mt-1 font-bold mb-10'>Stack technique</h2>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 pb-20 gap-15 px-0  '>
                    {/*colonne 1*/}
                    <div   data-aos="fade-up" className="bg-gray-900/30 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-90  md:w-88 h-90 to-gray-800 p-5 ">
                        {/*header*/}
                        <h3 className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[17px] font-bold '>Frontend</h3>
                        {/*skills 1*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>React / Next.js</h4>
                                <h4 className='text-gray-500'>95%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-65 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 2*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>TypeScript</h4>
                                <h4 className='text-gray-500'>90%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-115 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 3*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>Tailwind CSS</h4>
                                <h4 className='text-gray-500'>92%</h4>
                            </div>
                             <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-72 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 4*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>HTML5 / CSS3</h4>
                                <h4 className='text-gray-500'>95%</h4>
                            </div>
                          <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-65 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 5*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>JavaScript ES6+</h4>
                                <h4 className='text-gray-500'>93%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-100 h-2   rounded-e' ></div>
                            </div>
                           
                        </div>
                        
                        
                    </div>
                    {/*colonne 2*/}
                    <div  data-aos="fade-up"  className="bg-gray-900/30 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-90  md:w-88 h-90 to-gray-800 p-5 ">
                        {/*header*/}
                        <h3 className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[17px] font-bold '>Backend</h3>
                        {/*skills 1*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>Node.js / Express</h4>
                                <h4 className='text-gray-500'>90%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-115 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 2*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>Python / Django</h4>
                                <h4 className='text-gray-500'>75%</h4>
                            </div>
                           <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-500 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 3*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>REST APIs</h4>
                                <h4 className='text-gray-500'>92%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-72 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 4*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>GraphQL</h4>
                                <h4 className='text-gray-500'>78%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-230 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-72 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 5*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>PostgreSQL</h4>
                                <h4 className='text-gray-500'>85%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-400 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-72 h-2   rounded-e' ></div>
                            </div>
                          
                        </div>
                        
                        
                    </div>
                    {/*colonne 3*/}
                    <div   data-aos="fade-up" className="bg-gray-900/30 rounded-xl border flex-col gap-5 flex border-gray-700 md:h-90  md:w-88 h-90 to-gray-800 p-5 ">
                        {/*header*/}
                        <h3 className='bg-linear-to-r from-teal-300 to-teal-100 bg-clip-text text-transparent text-[17px] font-bold '>Frontend</h3>
                        {/*skills 1*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>Git / GitHub</h4>
                                <h4 className='text-gray-500'>93%</h4>
                            </div>
                             <div className='flex'>
                                <div className='bg-teal-500 w-900 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-100 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 2*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>Docker</h4>
                                <h4 className='text-gray-500'>82%</h4>
                            </div>
                           <div className='flex'>
                                <div className='bg-teal-500 w-400 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-85 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 3*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>CI/CD</h4>
                                <h4 className='text-gray-500'>80%</h4>
                            </div>
                            <div className='flex'>
                                <div className='bg-teal-500 w-400 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-100 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 4*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>AWS / Vercel</h4>
                                <h4 className='text-gray-500'>78%</h4>
                            </div>
                             <div className='flex'>
                                <div className='bg-teal-500 w-230 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-72 h-2   rounded-e' ></div>
                            </div>
                        </div>
                         {/*skills 5*/}
                        <div flex flex-col>
                            <div className='flex justify-between mb-1 '>
                                <h4 className='text-white/80'>MongoDB</h4>
                                <h4 className='text-gray-500'>85%</h4>
                            </div>
                             <div className='flex'>
                                <div className='bg-teal-500 w-400 h-2 rounded-2xl' ></div>
                                <div className='bg-gray-500/15 w-72 h-2   rounded-e' ></div>
                            </div>
                           
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
