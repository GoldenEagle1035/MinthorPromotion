
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div id="about" className="w-full h-auto flex flex-col gap-[30px] lg:gap-[60px] pb-[200px] lg:pb-[100px] bg-black items-center">
            <div className="relative w-5/6 flex flex-col pt-[100px] lg:pt-[150px] pb-[10px] lg:pb-[50px]">
                <div className="text-[40px] font-bold text-white text-center">Products</div>
            </div>
            <div id="terrain" className="w-5/6 flex flex-row">
                <div className="w-2/3 flex flex-col gap-[20px]">
                    <div className="text-[20px] lg:text-[30px] font-bold text-white">Best Metaverse Terrain System</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Transact quickly with our agentless, Nft-based digital land purchasing platform. Buy and manage land instantly directly from your blockchain wallet. Setting up your network is very simple. You can buy land tiles with coins. You need to setup in your wallet.</div>
                    <div className="grid grid-col-1 lg:grid-cols-2 gap-[10px]">
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="w-2/5 h-[70px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/5 flex flex-col gap-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Virtual Land</div>
                                <div className="text-[10px] lg:text-[15px] text-white">Buy virtual land and sail to the new world.</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="w-2/5 h-[70px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/5 flex flex-col gap-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Easy Management</div>
                                <div className="text-[10px] lg:text-[15px] text-white">The easiest way to manage your Metaverse world.</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="w-2/5 h-[70px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/5 flex flex-col gap-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Metaverse Overview</div>
                                <div className="text-[10px] lg:text-[15px] text-white">The easiest way to manage your digital plots.</div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-center">
                            <div className="w-2/5 h-[70px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/5 flex flex-col gap-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Metaverse Analysis</div>
                                <div className="text-[10px] lg:text-[15px] text-white">Manage your assets with easy accessibility.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Get to know us →</button>
                    </div>
                </div>
                <div className="w-1/3 flex flex-row justify-center items-center">
                    <img src="images/about-meta-11.gif" alt="" className="w-2/3 object-contain" />
                </div>
            </div>
            <div id="glance" className="w-5/6 flex flex-row">
                <div className="w-1/3 flex flex-row justify-center items-center">
                    <img src="images/about-meta-33.gif" alt="" className="w-2/3 object-contain" />
                </div>
                <div className="w-2/3 flex flex-col gap-[20px]">
                    <div className="text-[20px] lg:text-[30px] font-bold text-white">Metaverse Stats At A Glance</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Get everything you need for metaverse living: XR apps, devices, tools, services, and more. The open, secure metaverse for individuals, enterprises, and developers. Explore today</div>
                    <div className="grid grid-cols-1 gap-[10px]">
                        <div className="flex flex-row">
                            <div className="w-1/4 lg:w-1/6 rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/4 lg:w-5/6 flex flex-col gap-[10px] border border-gray-300/50 p-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Land NFT Minted</div>
                                <div className="text-[10px] lg:text-[15px] font-bold text-white">1288,962</div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/4 lg:w-1/6 rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/4 lg:w-5/6 flex flex-col gap-[10px] border border-gray-300/50 p-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Commission Pool</div>
                                <div className="text-[10px] lg:text-[15px] font-bold text-white">539,820 USD</div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/4 lg:w-1/6 rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/4 lg:w-5/6 flex flex-col gap-[10px] border border-gray-300/50 p-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Charity Pool</div>
                                <div className="text-[10px] lg:text-[15px] font-bold text-white">4,2563,539 USD</div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/4 lg:w-1/6 rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl"></div>
                            <div className="w-3/4 lg:w-5/6 flex flex-col gap-[10px] border border-gray-300/50 p-[10px]">
                                <div className="text-[15px] lg:text-[20px] font-bold text-white">Total Land Sold</div>
                                <div className="text-[10px] lg:text-[15px] font-bold text-white">8923,2345,123 USD</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Buy Land Immediately →</button>
                    </div>
                </div>
            </div>
            <div id="confidence" className="w-5/6 flex flex-col gap-[20px]">
                <div className="text-[20px] lg:text-[30px] font-bold text-white">Metaverse Stats At A Glance</div>
                <div className="text-[10px] lg:text-[15px] text-white">Get everything you need for metaverse living: XR apps, devices, tools, services, and more. The open, secure metaverse for individuals, enterprises, and developers. Explore today</div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[10px]">
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Metaverse App text-center</div>
                        <div className="text-[15px] text-white text-center">Metaverse universe manageable from all devices.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Advanced Economy text-center</div>
                        <div className="text-[15px] text-white text-center">Advanced metaverse system that can be managed from all accounts.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Metaverse Analysis text-center</div>
                        <div className="text-[15px] text-white text-center">Advanced analysis screen where you can manage all your assets.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Digital Assets text-center</div>
                        <div className="text-[15px] text-white text-center">Trading system where you can buy and sell your assets instantly.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Superior Protection text-center</div>
                        <div className="text-[15px] text-white text-center">State of the art protection with superior data storage system.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Virtual Reality text-center</div>
                        <div className="text-[15px] text-white text-center">An amazing perspective on the virtual metaverse from any device.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Blockchain Infrastructure text-center</div>
                        <div className="text-[15px] text-white text-center">You will be able to make transactions with your blockchain accounts.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] p-[20px] border border-gray-300/50 rounded-md items-center">
                        <div className="h-[150px] flex"></div>
                        <div className="text-[20px] font-bold text-white text-center">Next Stages text-center</div>
                        <div className="text-[15px] text-white text-center">Enter the new digital world of the Metaverse internet now.</div>
                        <div className="flex">
                            <button className="text-[10px] lg:text-[20px] font-bold text-white px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl">Read More →</button>
                        </div>
                    </div>
                </div>
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
            <div id="learn_more" className="relative w-5/6 flex flex-col lg:flex-row gap-[40px]">
                <div className="w-full lg:w-1/2 flex flex-col gap-[20px]">
                    <div className="text-[20px] lg:text-[30px] font-bold text-white">Learn More About Metaverse</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Imagine a virtual world where billions of people live, work, shop, learn and interact with each other from the comfort of their seats in the physical world.</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Get everything you need for metaverse living: XR apps, devices, tools, services, and more. The open, secure metaverse for individuals, enterprises, and developers. Explore today!</div>
                    <div className="text-[10px] lg:text-[15px] text-white">Preparing your brand for the new realities of marketing. Enter the world of the metaverse to accelerate brand value through digital innovation. For more information, fill out the form on the side.</div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
                    <div className="flex flex-row gap-[10px] lg:gap-[30px]">
                        <input placeholder="Full Name" className="w-1/3 px-[10px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[10px] lg:text-[20px] text-white placeholder:text-gray-500 bg-transparent" />
                        <input placeholder="Email Address" className="w-1/3 px-[10px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[10px] lg:text-[20px] text-white placeholder:text-gray-500 bg-transparent" />
                        <input placeholder="Phone Number" className="w-1/3 px-[10px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[10px] lg:text-[20px] text-white placeholder:text-gray-500 bg-transparent" />
                    </div>
                    <p placeholder="Your Message" className="w-full h-[150px] lg:h-[200px] px-[25px] py-[20px] rounded-md  border border-white text-[20px] text-white placeholder:text-gray-500" />
                    <input type="submit" value="Submit Form →" className="px-[15px] lg:px-[25px] py-[10px] lg:py-[20px] rounded-md  border border-white text-[15px] lg:text-[20px] text-white" />
                </div>
            </div>
            <div id="customers" className="relative w-5/6 flex flex-col gap-[20px]">
                <div className="text-[20px] lg:text-[30px] font-bold text-white text-center">What Are Our Customers Saying ?</div>
                <div className="text-[10px] lg:text-[15px] text-white text-center">Opinions from our happy customers.</div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[10px]">
                    <div className="flex flex-col items-center gap-[30px] p-[50px] rounded-xl bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl ">
                        <div className="text-[10px] lg:text-[15px] text-white text-center">I was very curious about the metaverse. I've come a long way with this site. Thank you.</div>
                        <div className="rounded-full w-[100px] h-[100px] bg-white"></div>
                        <div className="text-[10px] lg:text-[15px] text-white text-center text-center">Adam</div>
                    </div>
                    <div className="flex flex-col items-center gap-[30px] p-[50px] rounded-xl bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl ">
                        <div className="text-[10px] lg:text-[15px] text-white text-center">However, I made the right investment with the useful information here.</div>
                        <div className="rounded-full w-[100px] h-[100px] bg-white"></div>
                        <div className="text-[10px] lg:text-[15px] text-white text-center text-center">Cristian</div>
                    </div>
                    <div className="flex flex-col items-center gap-[30px] p-[50px] rounded-xl bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl ">
                        <div className="text-[10px] lg:text-[15px] text-white text-center">Entering the world of the Metaverse was truly a dream come true. And they did it.</div>
                        <div className="rounded-full w-[100px] h-[100px] bg-white"></div>
                        <div className="text-[10px] lg:text-[15px] text-white text-center text-center">Robert</div>
                    </div>
                    <div className="flex flex-col items-center gap-[30px] p-[50px] rounded-xl bg-gradient-to-r from-[#d02ef0] from-0% to-[#09cfff] to-100% hover:bg-gradient-to-l shadow-xl ">
                        <div className="text-[10px] lg:text-[15px] text-white text-center">A professional website that provides useful information about the Metaverse.</div>
                        <div className="rounded-full w-[100px] h-[100px] bg-white"></div>
                        <div className="text-[10px] lg:text-[15px] text-white text-center text-center">Elizabeth</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;