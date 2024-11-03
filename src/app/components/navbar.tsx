"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center h-[102px] px-4 lg:px-[135px] border-b border-black">
            <div className="flex items-center">
                <Image src="/logo.png" alt="logo" width={70} height={43.7} />
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden lg:flex justify-center items-center font-medium text-[14px] tracking-widest">
                <Link href="/">
                    <li className="relative mr-[45px] p-1 tracking-widest before:content-[''] before:block before:w-[120%] before:h-0.5 before:bg-black before:absolute before:left-[-10%] before:top-0 after:content-[''] after:block after:w-[120%] after:h-0.5 after:bg-black after:absolute after:left-[-10%] after:bottom-0">
                        MAIN
                    </li>
                </Link>
                <Link href="/gallery">
                    <li className="mr-[65px]">GALLERY</li>
                </Link>
                <Link href="/projects">
                    <li className="mr-[65px]">PROJECTS</li>
                </Link>
                <Link href="/certifications">
                    <li className="mr-[65px]">CERTIFICATIONS</li>
                </Link>
                <Link href="/contactpage">
                    <li>CONTACTS</li>
                </Link>
            </ul>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul className="lg:hidden absolute top-[102px] left-0 w-full bg-white border-t border-black font-medium text-[14px] tracking-widest">
                    <Link href="/">
                        <li className="py-4 text-center border-b border-black" onClick={() => setIsMobileMenuOpen(false)}>MAIN</li>
                    </Link>
                    <Link href="/gallery">
                        <li className="py-4 text-center border-b border-black" onClick={() => setIsMobileMenuOpen(false)}>GALLERY</li>
                    </Link>
                    <Link href="/projects">
                        <li className="py-4 text-center border-b border-black" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</li>
                    </Link>
                    <Link href="/certifications">
                        <li className="py-4 text-center border-b border-black" onClick={() => setIsMobileMenuOpen(false)}>CERTIFICATIONS</li>
                    </Link>
                    <Link href="/contactpage">
                        <li className="py-4 text-center" onClick={() => setIsMobileMenuOpen(false)}>CONTACTS</li>
                    </Link>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
