import React from "react";
import { AiOutlineGithub, AiOutlineSlack } from "react-icons/ai";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { SiGooglecolab } from "react-icons/si";
import { SiGooglebard } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";

function Skills()
{
    return(
        <section id="Skill" className="bg-secondary py-12 px-10">
            <div className="flex flex-col justify-center">
                <div className="flex pt-4 justify-center">
                    <h1 className="text-2xl md:text-4xl  text-yellow-400 font-name text-center">PROFFICIENT TOOLS</h1>
                </div>
                <div className="flex py-16 space-x-5 justify-center gap-2 md:gap-16">
                    <a className='text-slate-400' href="#" ><AiOutlineSlack size={40}/></a>
                    <a className='text-slate-400' href="#"><PiFigmaLogoDuotone size={40}/></a>
                    <a className='text-slate-400' href="#"><SiGooglecolab size={40}/></a>
                    <a className='text-slate-400' href="#"><AiOutlineGithub size={40}/></a>
                    <a className='text-slate-400' href="#"><SiGooglebard size={30}/></a>
                </div>
            </div>
            
            <div className="flex flex-col justify-center">
                <div className="flex pt-10 justify-center">
                    <h1 className="text-2xl md:text-4xl  text-yellow-400 font-name text-center">PROFFICIENT LANGUAGES</h1>
                </div>
                <div className="flex py-16 space-x-5 justify-center gap-2 md:gap-16">
                    <a className='text-slate-400' href="#" ><FaPython size={40}/></a>
                    <a className='text-slate-400' href="#"><FaJava size={40}/></a>
                    <a className='text-slate-400' href="#"><TiHtml5 size={40}/></a>
                    <a className='text-slate-400' href="#"><SiCsswizardry size={40}/></a>
                    <a className='text-slate-400' href="#"><IoLogoJavascript  size={40}/></a>
                </div>
            </div>
        </section>
    )
}

export default Skills;