
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Features = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div id="features" className="w-full h-auto flex flex-col gap-[40px] lg:gap-[60px] pb-[200px] lg:pb-[100px] bg-black items-center">
            <div className="relative w-5/6 flex flex-col pt-[100px] lg:pt-[150px] pb-[10px] lg:pb-[50px]">
                <div className="text-[40px] font-bold text-white text-center">Features</div>
            </div>
            <div id="tokenomics" className="w-5/6 flex flex-row">
                <div className="w-1/3 flex flex-row justify-center items-center">
                    <img src="images/about-meta-11.gif" alt="" className="w-2/3 object-contain" />
                </div>
                <div className="w-2/3 flex flex-col gap-[20px]">
                    <div className="text-[20px] lg:text-[30px] font-bold text-white">Brilliant Tokenomics</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Expanation ...</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Expanation ...</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Expanation ...</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Expanation ...</div>
                </div>
            </div>
            <div id="Whitepaper" className="w-5/6 flex flex-col gap-[20px] text-center">
                <div className="text-[20px] lg:text-[30px] font-bold text-white">Whitepaper</div>
                <div className="text-[10px] lg:text-[15px] text-white">We are going to do something in this project.</div>
                <div className="text-[10px] lg:text-[15px] text-white">We are going to do something in this project.</div>
                <div className="text-[10px] lg:text-[15px] text-white">We are going to do something in this project.</div>
                <div className="text-[10px] lg:text-[15px] text-white">We are going to do something in this project.</div>
                <div className="text-[10px] lg:text-[15px] text-white">We are going to do something in this project.</div>
            </div>
        </div>
    );
};

export default Features;