"use client";

import React from 'react';
import Link from 'next/link';

const Projects = () => {
    return (
        <section className="w-[93%] max-w-[1100px] m-auto mt-[10%] relative px-4">
            <h1 className="text-[32px] lg:text-[64px] capitalize text-[#bdbdbd] font-light m-2 text-center lg:text-left">
                Our Projects
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mt-4">
                <div className="w-full lg:w-[536px] h-[240px] bg-[url(/project01.png)] bg-[#333333]/80 bg-blend-darken flex items-center justify-center">
                    <div className="text-center lg:text-left w-[90%] lg:w-[233px] h-[160px] leading-none">
                        <h1 className="text-[32px] lg:text-[60px] font-semibold text-[#ffffff] capitalize">
                            Sample <br /> Project
                        </h1>
                        <p className="text-[#ffffff] font-extralight text-[12px] tracking-[3px] uppercase mt-4">
                            View more <i className="bi bi-arrow-right"></i>
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-[536px] h-[240px] bg-[url(/project2.png)] bg-cover bg-center"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
                <div className="w-full h-[240px] bg-[url(/project3.png)] bg-cover bg-center"></div>
                <div className="w-full h-[240px] bg-[url(/project4.png)] bg-cover bg-center"></div>
                <div className="w-full h-[240px] bg-[url(/project5.png)] bg-cover bg-center"></div>
            </div>
            <div className="flex justify-center lg:justify-end mt-7">
                <button className="w-full lg:w-[221.81px] bg-[#333333] h-[50px] lg:h-[71px] text-[#ffffff] text-[12px] tracking-[3px] uppercase flex justify-center items-center">
                    <Link href="/projects">
                        All Projects <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                </button>
            </div>
        </section>
    );
};

export default Projects;
