import React from "react";
import Profile from '../Assets/profile_pic.jpeg'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

function Hero()
{
    return (
        <div>
        <section id='Hero' className="flex flex-col md:flex-row px-10 py-20 bg-secondary">
            <div className="md:w-1/2 flex flex-col">
            <h1 className=" py-24 px-8 text-slate-300 text-4xl font-app">Hi!, <br/> <span className="text-5xl">I'm </span><span className="text-6xl py-32  text-yellow-400 font-hero">YOGESH</span> 
                <p className="text-3xl py-2">Pre-Final Year Student</p>
                <button className="text-2xl  text-yellow-400 opacity-50" >Resume</button>
                <div className="flex py-10 space-x-5">
                    <a className='hover:text-yellow-400' href="#"><AiOutlineLinkedin/></a>
                    <a className='hover:text-yellow-400' href="#"><AiOutlineGithub/></a>
                </div>
            </h1>
            </div>
            <img className='md:w-1/3  h-3/4'src={Profile}/>
        </section>
        
        </div>
    )
}

export default Hero;