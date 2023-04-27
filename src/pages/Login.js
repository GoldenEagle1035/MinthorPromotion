import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

import home_bg from '../assets/images/minthor_promotion_home.png';
import nft_1 from '../assets/images/nft_1.jpg';
import nft_2 from '../assets/images/nft_2.jpg';
import nft_3 from '../assets/images/nft_3.jpg';

const Login = () => {

    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-[1000px] relative flex justify-center items-center">
                <img src={home_bg} alt="" className="absolute h-full w-full object-cover -z-10" />
                <div className="w-2/3 flex flex-col gap-[50px]">
                    <div className="text-white font-bold text-[60px] text-center">Welcome to Minthor Promotion Platform!</div>
                    <div className="flex flex-row items-center">
                        <div className="w-1/2 flex justify-center">
                            <div className="text-white font-bold text-[20px] rounded-xl border-2 border-white bg-gray-500 px-10 py-3">Join to service</div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <div className="text-white font-bold text-[20px] rounded-xl border-2 border-white bg-gray-500 px-10 py-3">Get started promotion</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1000px] relative flex flex-col items-center bg-white">
                <div className="text-[#11112a] font-bold text-[50px] text-center py-20">About Us</div>
                <div className="w-3/4 flex flex-row">
                    <div className="w-1/2 flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[30px] font-bold text-[#9999ff]">Create Your Collection</div>
                            <div className="text-[20px] text-[#11112a]">Upload your work (image, video, audio, or 3D art), add a title and description</div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[30px] font-bold text-[#9999ff]">Explore And Mint</div>
                            <div className="text-[20px] text-[#11112a]">Mint NFTs from exciting projects on Minthor.io, the community-driven platform powered by ADAYield</div>
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <img src={nft_1} alt="nft_1" className="absolute w-[400px] h-[400px] rounded-lg top-[0px] left-[100px]" />
                        <img src={nft_2} alt="nft_2" className="absolute w-[300px] h-[300px] rounded-lg top-[300px] left-[200px]" />
                        <img src={nft_3} alt="nft_3" className="absolute w-[250px] h-[250px] rounded-lg top-[100px] left-[400px]" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[1000px] relative flex flex-col items-center bg-gray-100">
                <div className="text-[#11112a] font-bold text-[50px] text-center py-20">What Do You Do?</div>
                <div className="w-2/3 text-[20px] text-[#11112a] text-center pb-10">You join to the platform, invite people to Minthor and get commission or compensation based on the number of users you bring to the platform or the revenue generated from their referrals.</div>
                <div className="w-3/4 h-[700px] flex flex-row p-10">
                    <div className="w-1/3 h-full flex flex-col m-2 rounded-xl bg-white border border-gray-300 drop-shadow-md overflow-hidden">
                        <img src={nft_1} alt="" className="w-full h-1/2 object-cover" ></img>
                        <div className="h-1/2 flex flex-col justify-between px-5 py-10 items-center">
                            <div className="text-[#11112a] font-bold text-[30px] text-center">Join to the platform</div>
                            <div className="w-1/2 text-white font-bold text-[10px] text-center rounded-xl border-2 border-white bg-gray-500 px-5 py-3">JOIN NOW</div>
                        </div>
                    </div>
                    <div className="w-1/3 h-full flex flex-col m-2 rounded-xl bg-white border border-gray-300 drop-shadow-md overflow-hidden">
                        <img src={nft_2} alt="" className="w-full h-1/2 object-cover" ></img>
                        <div className="h-1/2 flex flex-col justify-between px-5 py-10 items-center">
                            <div className="text-[#11112a] font-bold text-[30px] text-center">Invite people</div>
                            <div className="w-1/2 text-white font-bold text-[10px] text-center rounded-xl border-2 border-white bg-gray-500 px-5 py-3">INVITE NOW</div>
                        </div>
                    </div>
                    <div className="w-1/3 h-full flex flex-col m-2 rounded-xl bg-white border border-gray-300 drop-shadow-md overflow-hidden">
                        <img src={nft_3} alt="" className="w-full h-1/2 object-cover" ></img>
                        <div className="h-1/2 flex flex-col justify-between px-5 py-10 items-center">
                            <div className="text-[#11112a] font-bold text-[30px] text-center">Get compensation</div>
                            <div className="w-1/2 text-white font-bold text-[10px] text-center rounded-xl border-2 border-white bg-gray-500 px-5 py-3">GET NOW</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative flex flex-row justify-center gap-[50px] items-center bg-[#11112a] py-10">
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-white bg-gray-500 flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">+40M MINTED</div>
                </div>
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-white bg-gray-500 flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">+30M INVITED</div>
                </div>
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-white bg-gray-500 flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">+20 COLLECTIONS</div>
                </div>
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-white bg-gray-500 flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">+40M MINTED</div>
                </div>
            </div>
            <div className="w-full h-[1000px] relative flex flex-col items-center bg-white">
                <div className="w-full text-[#11112a] font-bold text-[50px] text-center py-20">Promotion Assets</div>
                <div className="w-2/3 grid grid-cols-3 gap-y-[50px]">
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2 border-gray-300 bg-gray-100 drop-shadow-md">

                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold text-[#11112a]">Asset</div>
                            <div className="text-[10px] text-[#11112a]">Asset info</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2 border-gray-300 bg-gray-100 drop-shadow-md">

                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold text-[#11112a]">Asset</div>
                            <div className="text-[10px] text-[#11112a]">Asset info</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2 border-gray-300 bg-gray-100 drop-shadow-md">

                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold text-[#11112a]">Asset</div>
                            <div className="text-[10px] text-[#11112a]">Asset info</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2 border-gray-300 bg-gray-100 drop-shadow-md">

                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold text-[#11112a]">Asset</div>
                            <div className="text-[10px] text-[#11112a]">Asset info</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2 border-gray-300 bg-gray-100 drop-shadow-md">

                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold text-[#11112a]">Asset</div>
                            <div className="text-[10px] text-[#11112a]">Asset info</div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2 border-gray-300 bg-gray-100 drop-shadow-md">

                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold text-[#11112a]">Asset</div>
                            <div className="text-[10px] text-[#11112a]">Asset info</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1000px] flex flex-col items-center bg-gray-500">
                <div className="w-full text-[#11112a] font-bold text-[50px] text-center py-20">Invite To Our platform!</div>
                <div className="w-2/3 h-full flex flex-row">
                    <div className="w-1/2 h-full p-20">
                        <img src={home_bg} alt="" className="w-full h-full object-cover rounded-xl border-2 border-white drop-shadow-md" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-[30px] p-20">
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[30px] font-bold text-[#9999ff]">Your referral link</div>
                            <div className="text-[20px] text-white">https://Minthor.io...</div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[30px] font-bold text-[#9999ff]">Your promo code</div>
                            <div className="text-[20px] text-white">g93Jnd32</div>
                        </div>
                        <div className="flex flex-row gap-8">
                            <a
                                href=""
                                className="text-gray-200 hover:text-white"
                            >
                                <svg fill="#9999ff" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842" /></svg>
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href=""
                                className="text-gray-200 hover:text-white"
                            >
                                <svg fill="#9999ff" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" /></svg>
                                <span className="sr-only">Youtube</span>
                            </a>
                            <a
                                href=""
                                className="text-gray-200 hover:text-white"
                            >
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" fill="#9999ff" /></svg>
                                <span className="sr-only">Discord</span>
                            </a>
                            <a
                                href=""
                                className="text-gray-200 hover:text-white"
                            >
                                <svg fill="#9999ff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /></svg>
                                <span className="sr-only">Telegram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full relative flex flex-row justify-center gap-[50px] items-center bg-white py-10">
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-[#9999ff] bg-[#11112a] flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">200 INVITED</div>
                </div>
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-[#9999ff] bg-[#11112a] flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">30M REVENUE</div>
                </div>
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-[#9999ff] bg-[#11112a] flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">2K COMMISION</div>
                </div>
                <div className="w-[200px] h-[200px] rounded-3xl border-2 border-[#9999ff] bg-[#11112a] flex items-center justify-center drop-shadow-md">
                    <div className="text-[20px] font-bold text-white">1k COMPRESATION</div>
                </div>
            </div>
        </div>
    );
};

export default Login;