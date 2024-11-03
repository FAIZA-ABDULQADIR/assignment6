"use client";

import React from 'react';

const MainFocus = () => {
    return (
        <section className="w-[93%] max-w-[1100px] m-auto mt-[10%] px-4">
            <h1 className="text-[32px] lg:text-[64px] font-light capitalize text-[#bdbdbd] m-2 text-center lg:text-left">
                Main Focus/Mission Statement
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="w-full md:w-[413px] flex items-center justify-center mt-7 text-center md:text-left">
                    <h2 className="text-[100px] md:text-[200px] font-bold text-[#f2f2f2]">1</h2>
                    <p className="w-full md:w-[279px] text-[#333333] font-normal text-[18px] md:text-[22px] ml-0 md:ml-7 mt-4 md:mt-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
                    </p>
                </div>
                <div className="w-full md:w-[570px] flex items-center justify-center mt-7 text-center md:text-left">
                    <h2 className="text-[100px] md:text-[200px] font-bold text-[#f2f2f2]">2</h2>
                    <p className="w-full md:w-[420px] text-[#333333] font-normal text-[18px] md:text-[22px] ml-0 md:ml-7 mt-4 md:mt-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainFocus;
