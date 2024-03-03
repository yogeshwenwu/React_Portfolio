import React from "react";
import P3 from '../Assets/P3.jpg'
import P2 from '../Assets/P2.png'
import P1 from '../Assets/P1.png'


function Projects()
{
    const config = {
        projects : [
            {
                image: P3,
                desc : 'Mockup Design',
                link : ''
            },
            {
                image: P2,
                desc : 'Note Taking App Design',
                link : ''
            },
            {
                image: P1,
                desc : 'Pet Care App Design',
                link : ''
            }
        ]
    }
    return(
    <section id="Project" className="flex flex-col py-12 px-10 justify-center bg-light">
        <div className="w-full pt-4">
            <div className="flex justify-center">
                <h1 className="text-3xl md:text-4xl  text-yellow-400 font-name text-center">PROJECTS</h1>
            </div>
        </div>
        <div className="w-full pt-20 min-w-145 max-w-150">
            <div className="flex flex-col md:flex-row px-8 md:px-14 gap-10">
                {config.projects.map((project) => (
                    <a href={project.link}>
                        <div className="relative">
                            <img className='md:h-[200px] md:w-[400px]' src={project.image}/>
                            <div className="project-desc">
                                <p className="text-center px-5 py-20">{project.desc}</p>
                            </div>
                        </div>
                    </a>
                ))}
                
            </div>            
        </div>
    </section>
    )
}

export default Projects;