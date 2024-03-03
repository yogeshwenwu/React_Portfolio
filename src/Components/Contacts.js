import React from "react";


function Contact()
{
    return(
        <section id="Contact" className="bg-secondary py-12">
            <div>
                <h1 className="text-3xl md:text-4xl pt-4 text-yellow-400 font-name text-center">CONTACT ME</h1>
                <p className="text-lg md:text-2xl py-12 px-10 md:px-32 font-app text-slate-300  opacity-60 text-center ">For more detailed information contact me via</p>
                <p className="text-lg md:text-2xl pb-5 px-10 md:px-32 font-app text-slate-300  opacity-60 text-center"><span className="font-bold">Email :  </span>yogeshmv744@gmail.com</p>
                <p className="text-lg md:text-2xl pb-5 px-10 md:px-32 font-app text-slate-300  opacity-60 text-center"><span className="font-bold">Phone :  </span>+91  8438832759</p>
            </div>
        </section>
    )
}

export default Contact;