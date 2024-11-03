"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
    return (
        <section className="w-[93%] max-w-[1100px] m-auto mt-[10%] px-4">
            <h1 className="text-[32px] lg:text-[64px] capitalize text-[#bdbdbd] font-light m-2 text-center lg:text-left">
                Contact Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <div className="w-full lg:w-[370px]">
                    <form action="post" className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none outline-none px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number *"
                            className="w-full h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none outline-none px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Email *"
                            className="w-full h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none outline-none px-4 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Interested In"
                            className="w-full h-[46px] bg-[#f3f3f3] mt-2 text-[14px] border-none outline-none px-4 py-2"
                        />
                        <textarea
                            placeholder="Message *"
                            className="w-full bg-[#f3f3f3] h-[127px] mt-2 text-[14px] border-none outline-none px-4 py-2"
                        ></textarea>
                    </form>
                </div>
                <div className="mt-8 lg:mt-0 w-full lg:w-[698px] h-auto flex justify-center">
                    <Image src="/contact1.png" alt="contact" width={698} height={349} className="w-full lg:w-[698px] h-auto" />
                </div>
            </div>
            <div className="flex justify-center lg:justify-start">
                <button className="w-full lg:w-[221.81px] bg-[#333333] h-[50px] lg:h-[71px] text-[#f3f3f3] text-[12px] tracking-[3px] uppercase flex justify-center items-center mt-8">
                    <Link href="/contactpage">
                        Send Email <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                </button>
            </div>
        </section>
    );
};

export default Contact;
