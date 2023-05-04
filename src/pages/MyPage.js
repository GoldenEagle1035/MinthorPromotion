import { Link, useNavigate } from "react-router-dom"
import React, { useEffect } from "react";
import { ContentCopy } from "@mui/icons-material";
import { useAppSelector } from "../redux/store";
import { useClaimMutation, useGetAllUsersQuery, useGetUserByAddressQuery } from "../redux/apis/userApi";
import { useGetHistorysByAddressQuery } from "../redux/apis/historyApi";

const MyPage = () => {

    const navigate = useNavigate()

    const state_wallet = useAppSelector((state) => state.walletState);
    const state_user = useAppSelector((state) => state.userState);
    const state_history = useAppSelector((state) => state.historyState);

    const [claim] = useClaimMutation();

    useGetHistorysByAddressQuery(state_wallet.address);
    useGetUserByAddressQuery(state_wallet.address);

    useEffect(() => {

    }, [])

    const onClaim = () => {
        let formdata = new FormData();
        formdata.append('address', state_wallet.address);

        claim(formdata);

        let amount = state_history.historys.filter((item) => {
            if (item.Claimed == "0") return true; else return false;
        }).reduce((total, item) => total + parseInt(item.Reward) / 10, 0)

        // sendAffiliate(amount)
    }

    return (
        <div className="w-full h-[100vh] flex flex-col bg-gray-300 px-[30px] pt-[150px] pb-[30px]">
            <div className="w-full h-full relative flex flex-row gap-[20px] justify-center items-center bg-white rounded-xl border-2 border-gray-500 drop-shadow-xl p-[30px]">
                <div className="w-1/2 h-full flex flex-col gap-[20px]">
                    <div className="w-full h-1/3 flex flex-col gap-[10px] border-2 border-gray-500 drop-shadow-xl rounded-xl overflow-hidden">
                        <img className="w-full h-full object-fill" src="images/adayield.jpg" alt="" />
                    </div>
                    <div className="w-full h-1/3 flex flex-col gap-[10px] p-[20px] border-2 border-gray-500 drop-shadow-xl rounded-xl">
                        <div className="w-full h-1/4 flex flex-row gap-[10px] items-center">
                            <div className="w-1/2 text-[20px] font-bold text-gray-700 overflow-hidden">Promo Link:</div>
                            <div className="w-1/2 flex flex-row">
                                <div className="w-full text-[15px] text-gray-700 overflow-hidden">{state_user.user ? state_user.user.PromoLink : ""}</div>
                                <ContentCopy className="text-gray-700 hover:cursor-pointer" sx={{ fontSize: 15 }} onClick={async (e) => { await navigator.clipboard.writeText(state_user.user ? state_user.user.PromoLink : "") }} />
                            </div>
                        </div>
                        <div className="w-full h-1/4 flex flex-row gap-[10px] items-center">
                            <div className="w-1/2 text-[20px] font-bold text-gray-700 overflow-hidden">Promo Code:</div>
                            <div className="w-1/2 flex flex-row">
                                <div className="w-full text-[15px] text-gray-700 overflow-hidden">{state_user.user ? state_user.user.PromoCode : ""}</div>
                                <ContentCopy className="text-gray-700 hover:cursor-pointer" sx={{ fontSize: 15 }} onClick={async (e) => { await navigator.clipboard.writeText(state_user.user ? state_user.user.PromoCode : "") }} />
                            </div>
                        </div>
                        <div className="w-full h-1/4 flex flex-row gap-[10px] items-center">
                            <div className="w-1/2 text-[20px] font-bold text-gray-700 overflow-hidden">Total claimed:</div>
                            <div className="w-1/2 flex flex-row">
                                <div className="w-full text-[15px] text-gray-700 overflow-hidden">{state_user.user ? state_user.user.TotalClaimed / 1000000.0 : ""} ₳</div>
                            </div>
                        </div>
                        <div className="w-full h-1/4 flex flex-row gap-[10px] items-center">
                            <div className="w-1/2 text-[20px] font-bold text-gray-700 overflow-hidden">Total invited:</div>
                            <div className="w-1/2 flex flex-row">
                                <div className="w-full text-[15px] text-gray-700 overflow-hidden">{state_user.user ? state_user.user.TotalInvited : ""}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/3 flex flex-col gap-[10px] p-[20px] border-2 border-gray-500 drop-shadow-xl rounded-xl">
                        <div className="w-full h-1/3 flex flex-row items-center justify-center">
                            <div className="text-[20px] font-bold text-gray-700 text-center">Available ADA to claim</div>
                        </div>
                        <div className="w-full h-1/3 flex flex-row items-center justify-center">
                            <div className="text-[30px] font-bold text-[#00ff00] text-center">
                                {state_history.historys.filter((item) => {
                                    if (item.Claimed == "0") return true; else return false;
                                }).reduce((total, item) => total + parseInt(item.Reward) / 10, 0) / 1000000.0} ₳
                            </div>
                        </div>
                        <div className="w-full h-1/3 flex flex-row items-center justify-center">
                            <div className="border-2 border-gray-300 bg-gray-100 drop-shadow-xl rounded-full text-[15px] font-bold text-gray-500 hover:cursor-pointer py-[5px] px-[20px]" onClick={onClaim}>Claim</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-[20px] border-2 border-gray-500 drop-shadow-xl p-[20px] rounded-xl">
                    <div className="text-xl font-bold text-gray-700">History</div>
                    <div className="w-full h-full flex flex-col gap-[10px] border broder-gray-300 p-10 overflow-auto">
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] font-bold text-gray-700 text-center overflow-hidden">Address</div>
                            <div className="w-1/3 text-[15px] font-bold text-gray-700 text-center overflow-hidden">Date</div>
                            <div className="w-1/3 text-[15px] font-bold text-gray-700 text-center overflow-hidden">Claimed</div>
                        </div>
                        {state_history.historys.map((item) => {
                            return (
                                <div className="w-full flex flex-row gap-[5px]">
                                    <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">{item.Address}</div>
                                    <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">{item.CreatedAt}</div>
                                    <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">{item.Claimed == "0" ? "X" : "O"}</div>
                                </div>
                            )
                        })}
                        {/* <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div>
                        <div className="w-full flex flex-row gap-[5px]">
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">addr19h9afh98hq2837398216y98ya9w8y89r98we</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">2023 Mar 14th 12:23:00</div>
                            <div className="w-1/3 text-[15px] text-gray-700 text-center overflow-hidden">O</div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPage;