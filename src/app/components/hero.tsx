"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center w-[93%] m-auto">
                <div className="child1 ml-4 lg:ml-[80px] mt-10 lg:mt-[172px] w-full lg:w-[240px] text-center lg:text-left">
                    <h1 className="uppercase text-[32px] lg:text-[64px] text-[#BDBDBD] font-light tracking-normal mb-0 pb-0 leading-none m-1">
                        project <br />
                        <span className="capitalize font-bold text-[32px] lg:text-[64px] text-[#333333] mt-0 pt-0">
                            lorum
                        </span>
                    </h1>
                    <div className="flex justify-center lg:justify-start mt-10 lg:mt-[76px] m-1">
                        <div className="w-[40px] lg:w-[53px] h-[40px] lg:h-[53px] border border-[#f7f7f7] flex justify-center items-center">
                            <i className="bi bi-arrow-left"></i>
                        </div>
                        <div className="w-[40px] lg:w-[53px] h-[40px] lg:h-[53px] bg-[#f2f2f2] flex justify-center items-center ml-5 lg:ml-7 relative">
                            <i className="bi bi-arrow-right"></i>
                            <span
                                className="absolute top-1/2 bg-[#f2f2f2] left-full h-[0.5px] translate-y-[-50%] hidden lg:block"
                                style={{ width: `calc(100vw - 93% - 715px - 80px)` }}
                            ></span>
                        </div>
                    </div>
                    <div className="w-[100px] lg:w-[141.88px] h-[40px] lg:h-[52px] text-[20px] lg:text-[24px] flex justify-center lg:justify-between items-center text-[#bdbdbd] m-1 mt-10 lg:mt-[75px]">
                        <div className="flex flex-col leading-none text-center lg:text-left">
                            <span className="mb-0 pb-0 leading-none">0</span>
                            <span className="mt-0 pt-0">1</span>
                        </div>
                        <p>/</p>
                        <p>02</p>
                    </div>
                </div>
                <div className="child2 relative mt-10 lg:mt-0">
                    <Image
                        src="/image1.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-full lg:w-[715px] h-auto lg:h-[829px] mr-0 lg:mr-20"
                    />
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:bottom-0 lg:left-0 w-[180px] lg:w-[221.81px] bg-white h-[50px] lg:h-[71px] text-black text-[10px] lg:text-[12px] tracking-[2px] lg:tracking-[3px] uppercase flex justify-center items-center">
                        <Link href="">
                            view project <i className="bi bi-arrow-right ml-2"></i>
                        </Link>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Hero;
