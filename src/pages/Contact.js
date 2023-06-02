
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div id="contact" className="w-full h-auto flex flex-col gap-[30px] lg:gap-[60px] pb-[200px] lg:pb-[100px] bg-black items-center">
            <div className="relative w-5/6 flex flex-col pt-[100px] lg:pt-[150px] pb-[10px] lg:pb-[50px]">
                <div className="text-[40px] font-bold text-white text-center">Contact</div>
            </div>
            <div className="w-5/6 flex flex-col gap-[30px] items-center">
                <div className="w-full lg:w-5/6 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[20px] ">
                    <div className="flex flex-col gap-[10px] items-center rounded-md border border-white p-[40px]">
                        <div className="h-[50px] flex justify-center">

                        </div>
                        <div className="text-[20px] lg:text-[30px] font-bold text-white text-center">CUSTOMER SERVICE</div>
                        <div className="text-[15px] lg:text-[20px] text-white text-center">+1(234)567 89 10</div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center rounded-md border border-white p-[40px]">
                        <div className="h-[50px] flex justify-center">

                        </div>
                        <div className="text-[20px] lg:text-[30px] font-bold text-white text-center">MAIL ADDRESS</div>
                        <div className="text-[15px] lg:text-[20px] text-white text-center">example@example.com</div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center rounded-md border border-white p-[40px]">
                        <div className="h-[50px] flex justify-center">

                        </div>
                        <div className="text-[20px] lg:text-[30px] font-bold text-white text-center">OFFICE</div>
                        <div className="text-[15px] lg:text-[20px] text-white text-center">Yeşilpınar Mh. Tepe Sk. Eyüp İstanbul</div>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-[10px] lg:gap-[30px]">
                    <input placeholder="Full Name" className="w-1/3 px-[10px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[10px] lg:text-[20px] text-white placeholder:text-gray-500 bg-transparent" />
                    <input placeholder="Email Address" className="w-1/3 px-[10px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[10px] lg:text-[20px] text-white placeholder:text-gray-500 bg-transparent" />
                    <input placeholder="Phone Number" className="w-1/3 px-[10px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[10px] lg:text-[20px] text-white placeholder:text-gray-500 bg-transparent" />
                </div>
                <p placeholder="Your Message" className="w-full h-[150px] lg:h-[200px] px-[25px] py-[20px] rounded-md  border border-white text-[20px] text-white placeholder:text-gray-500" />
                <div className="flex">
                    <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Submit Form →</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;