
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommingSoon = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div id="comming_soon" className="w-full h-[100vh] flex flex-col gap-[30px] lg:gap-[60px] pb-[200px] lg:pb-[100px] bg-black items-center">
            <div className="relative w-5/6 flex flex-col pt-[100px] lg:pt-[150px] pb-[10px] lg:pb-[50px]">
                <div className="text-[40px] font-bold text-white text-center">Comming Soon</div>
            </div>
            <div id="comming_soon_alert" className="relative w-5/6 flex flex-col gap-[20px]">
                <div className="text-[20px] lg:text-[30px] font-bold text-white text-center">Comming Soon</div>
            </div>
        </div>
    );
};

export default CommingSoon;