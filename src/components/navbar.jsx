import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (

        <div className="navbar shadow-sm md:px-21 px-3 bg-gray-950/80 border-b border-gray-800 ">


            <div className="flex-1">
                <div className='flex justify-between mb-3 '>
                    {/*le logo */}
                    <Link to="/" className="btn btn-ghost text-[19px] font-logo bg-linear-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent me-3 font-bold">{"<dev />"} </Link>
                   
                    {/*burger*/}
                    <label htmlFor="burger" className='flex gap-1 border w-11 p-2 items-center flex-col rounded-md border-teal-500 md:hidden'>
                        <span className='bg-teal-500 w-6 h-1'></span>
                        <span className='bg-teal-500 w-6 h-1'></span>
                        <span className='bg-teal-500 w-6 h-1'></span>
                    </label>
                </div>

                <div>
                    {/*menu ecran mobile*/}
                    <input type="checkbox" name="burger" id="burger" className='peer hidden' />
                    <div className="md:hidden peer-checked:flex hidden flex-col ps-5 gap-2 text-[18px] text-white/50 ">
                        <Link to='/' className='hover:text-teal-400 transition duration-200'>Accueil</Link>
                        <Link to='/About' className='hover:text-teal-400 transition duration-200'>A propos</Link>
                        <Link to='/Project' className='hover:text-teal-400 transition duration-200'>Projet</Link>
                        <Link to='/Skills' className='hover:text-teal-400 transition duration-200'>Competence</Link>
                        <Link to='/Blog' className='hover:text-teal-400 transition duration-200'>Blog</Link>
                        <Link to='/Contact' className='hover:text-teal-400 transition duration-200'>Contact</Link>
                    </div>
                </div>

            </div>



            {/* menu ecran large*/}
            <div className="flex-none hidden md:flex">
                <ul className=" flex gap-5 menu-horizontal px-1 text-gray-500 text-[19px]">
                   <Link to='/' className='hover:text-teal-400 transition duration-200'>Accueil</Link>
                        <Link to='/About' className='hover:text-teal-400 transition duration-200'>A propos</Link>
                        <Link to='/Project' className='hover:text-teal-400 transition duration-200'>Projet</Link>
                        <Link to='/Skills' className='hover:text-teal-400 transition duration-200'>Competence</Link>
                        <Link to='/Blog' className='hover:text-teal-400 transition duration-200'>Blog</Link>
                        <Link to='/Contact' className='hover:text-teal-400 transition duration-200'>Contact</Link>
                </ul>
            </div>


        </div>

        //navbar


    )
}

export default Navbar
