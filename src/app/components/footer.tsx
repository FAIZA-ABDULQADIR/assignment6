"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full h-auto mt-28 capitalize bg-[#333333] text-[#ffffff] pt-16 pb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around px-8 lg:px-0">
                <div className="mb-8 lg:mb-0">
                    <Image src="/footer.png" alt="footer" width={145} height={94} className="h-[94px] w-[145px]" />
                </div>

                <div className="w-full lg:w-[103px] text-center lg:text-left mb-8 lg:mb-0">
                    <h3 className="text-[16px] font-bold">information</h3>
                    <ul className="text-[14px] font-medium">
                        <Link href=""><li className="mt-5">main</li></Link>
                        <Link href=""><li className="mt-5">gallery</li></Link>
                        <Link href=""><li className="mt-5">project</li></Link>
                        <Link href=""><li className="mt-5">certifications</li></Link>
                        <Link href=""><li className="mt-5">contacts</li></Link>
                    </ul>
                </div>

                <div className="w-full lg:w-[325px] text-center lg:text-left mb-8 lg:mb-0">
                    <h3 className="text-[16px] font-bold">contacts</h3>
                    <ul>
                        <li className="flex justify-center lg:justify-start gap-4 mt-5">
                            <i className="bi bi-geo-alt text-[16px]"></i>
                            <p className="text-[14px] font-medium">1234 Sample Street<br />Austin, Texas 78704</p>
                        </li>
                        <li className="flex justify-center lg:justify-start gap-4 mt-16">
                            <i className="bi bi-telephone text-[16px]"></i>
                            <p className="text-[14px] font-medium">512.333.2222</p>
                        </li>
                        <li className="flex justify-center lg:justify-start gap-4 mt-7">
                            <i className="bi bi-envelope text-[16px]"></i>
                            <p className="text-[14px] font-medium lowercase">sampleemail@gmail.com</p>
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:w-[193px] text-center lg:text-left mb-8 lg:mb-0">
                    <h3 className="text-[16px] font-bold">social media</h3>
                    <ul className="text-[16px] flex justify-center lg:justify-start gap-9 mt-5">
                        <Link href=""><li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M18 3h-3c-2.21 0-4 1.79-4 4v3H8v4h3v8h4v-8h3l1-4h-4V7c0-0.55 0.45-1 1-1h3V3z" fill="#ffffff" /></svg></li></Link>
                        <Link href=""><li><i className="bi bi-twitter"></i></li></Link>
                        <Link href=""><li><i className="bi bi-linkedin"></i></li></Link>
                        <Link href=""><li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" fill="#ffffff" /></svg></li></Link>
                    </ul>
                </div>
            </div>

            <div className="w-full h-px bg-[#f2f2f2] mt-16 opacity-10"></div>
            <h2 className="text-[14px] font-light text-[#c8c8c8] opacity-30 text-center mt-5">© 2021 All Rights Reserved</h2>
        </footer>
    );
};

export default Footer;
