"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
    return (
        <section className="w-full max-w-[1100px] m-auto mt-10 px-4">
            <div className="bg-[#fbfbfb] flex flex-col lg:flex-row justify-center items-center lg:h-[465px] lg:p-8 p-4">
                <div className="flex flex-col lg:flex-row lg:justify-center items-center">
                    <div className="lg:ml-12 mb-4 lg:mb-0">
                        <Image 
                            src='/about1.png' 
                            alt='about1' 
                            width={270} 
                            height={265} 
                            className="w-[180px] lg:w-[270px] h-auto border border-gray-300" 
                        />
                        <Image 
                            src='/about2.png' 
                            alt='about2' 
                            width={270} 
                            height={140} 
                            className="w-[180px] lg:w-[270px] h-auto border border-gray-300 mt-4" 
                        />
                    </div>
                    <div className="mt-4 lg:mt-14 lg:mx-4">
                        <Image 
                            src='/about3.png' 
                            alt='about3' 
                            width={270} 
                            height={345} 
                            className="w-[180px] lg:w-[270px] h-auto border border-gray-300" 
                        />
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:mr-10 text-center lg:text-left lg:w-[400px]">
                    <h1 className="text-[32px] lg:text-[64px] capitalize text-[#bdbdbd] font-light mb-4">
                        About
                    </h1>
                    <p className="text-black text-[14px] lg:text-[16px] font-light lg:w-[400px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <Link href="">
                        <button className="w-[180px] lg:w-[221.81px] bg-white h-[50px] lg:h-[71px] text-black text-[10px] lg:text-[12px] tracking-[2px] lg:tracking-[3px] uppercase mt-6 px-4 py-2 flex items-center justify-center">
                            Read More <i className="bi bi-arrow-right ml-2"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
