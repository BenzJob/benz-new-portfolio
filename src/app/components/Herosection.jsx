"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-zinc-950 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-800 via-sky-600 to-lime-600">Hello I'm{" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Ayoub',
                            1000, // wait 1s before replacing "Ayoub" with "Web Developer"
                            'Web Developer',
                            1000,
                            'Mobile developer',
                            1000,
                            'UI/UX designer',
                            1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-zinc-950 text-lg lg:text-xl mb-6">
                    Hadi fkhater khouya Badr, rak kayn : Dima m3ak f lmagana hhhhh
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full hover:text-zinc-950 mr-4 bg-gradient-to-br from-violet-800 via-sky-600 to-lime-600 text-zinc-100">Hire me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-lime-600 via-sky-600 to-violet-800">
                            <span className="block bg-transparent hover:bg-zinc-800 rounded-full px-5 py-2">Download my CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-gradient-to-br from-violet-800 via-sky-600 to-lime-600 w-[250px] h-[250px] lg:size-[300px] relative">
                        <Image
                            src="/images/dev-img.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;