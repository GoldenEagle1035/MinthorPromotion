
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Team = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div id="team" className="w-full h-auto flex flex-col gap-[30px] lg:gap-[60px] pb-[200px] lg:pb-[100px] bg-black items-center">
            <div className="relative w-5/6 flex flex-col pt-[100px] lg:pt-[150px] pb-[10px] lg:pb-[50px]">
                <div className="text-[40px] font-bold text-white text-center">Partners</div>
            </div>
            <div id="nft_projects" className="relative w-5/6 flex flex-col gap-[20px]">
                <div className="absolute w-full h-full flex justify-center">
                    <img src="images/nft-rotate1.png" alt="" className="h-full object-contain" />
                </div>
                <div className="text-[20px] lg:text-[30px] font-bold text-white">Check Out The Most Creative NFT Projects</div>
                <div className="text-[10px] lg:text-[15px] text-white">Metaverse is a marketplace dedicated to the digital world.</div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[10px]">
                    <div className="group relative w-full h-[300px] lg:h-[500px] flex border border-gray-300/50 rounded-md overflow-hidden">
                        {/* <img src="" alt="" className="absolute top-0 left-0 w-full h-full"/> */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="flex flex-col items-center rounded-md gap-[20px] bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% p-[15px] mb-0 lg:-mb-[80px] group-hover:mb-0">
                                <div className="text-[20px] font-bold text-white">Moon NFT</div>
                                <div className="flex">
                                    <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Project Review →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative w-full h-[300px] lg:h-[500px] flex border border-gray-300/50 rounded-md overflow-hidden">
                        {/* <img src="" alt="" className="absolute top-0 left-0 w-full h-full"/> */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="flex flex-col items-center rounded-md gap-[20px] bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% p-[15px] mb-0 lg:-mb-[80px] group-hover:mb-0">
                                <div className="text-[20px] font-bold text-white">Kawain NFT</div>
                                <div className="flex">
                                    <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Project Review →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative w-full h-[300px] lg:h-[500px] flex border border-gray-300/50 rounded-md overflow-hidden">
                        {/* <img src="" alt="" className="absolute top-0 left-0 w-full h-full"/> */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="flex flex-col items-center rounded-md gap-[20px] bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% p-[15px] mb-0 lg:-mb-[80px] group-hover:mb-0">
                                <div className="text-[20px] font-bold text-white">Sura NFT</div>
                                <div className="flex">
                                    <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Project Review →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative w-full h-[300px] lg:h-[500px] flex border border-gray-300/50 rounded-md overflow-hidden">
                        {/* <img src="" alt="" className="absolute top-0 left-0 w-full h-full"/> */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="flex flex-col items-center rounded-md gap-[20px] bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% p-[15px] mb-0 lg:-mb-[80px] group-hover:mb-0">
                                <div className="text-[20px] font-bold text-white">Nix NFT</div>
                                <div className="flex">
                                    <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Project Review →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;