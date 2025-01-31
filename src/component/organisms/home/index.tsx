import {useState, useEffect} from "react";

import axios from "axios";
import _ from "lodash";


interface IHomeProps {}
export const Home = (props: IHomeProps) => {

    const [data, setData] = useState<{ wallet: string; data: any; }[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://api.energiswap.exchange/v1/assets');
            const { data } = res;

            let tempData: { wallet: string; data: any; }[] = [];

            _.each( data, ( val, key ) => { 
                tempData.push({wallet: key, data: val });
            });

            setData(tempData);
        };

        getData();
    },[]);

    return (
        <div className="flex grow bg-gray-700 overflow-x-hidden">
            <div className="flex grow flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-orange-400">Icon</th>
                                        <th scope="col" className="px-6 py-4 text-orange-400">Wallet</th>
                                        <th scope="col" className="px-6 py-4 text-orange-400">Last Price</th>
                                        <th scope="col" className="px-6 py-4 text-orange-400">Maker Fee</th>
                                        <th scope="col" className="px-6 py-4 text-orange-400">Taker Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item: { wallet: string; data: any; }, index: number) => {
                                            return (
                                                <tr key={index} className="border-b border-neutral-200 dark:border-white/10">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">

                                                        {
                                                            item?.data?.symbol !== "0FP0EXP" ? 
                                                                <img 
                                                                    src={new URL(`../../../assets/icons/${item?.data?.symbol}.svg`, import.meta.url).href}
                                                                    className="h-[30px] w-[30px]"
                                                                /> : null
                                                        }
                                                  
                                                    </td>
                                                    <td className="px-6 py-4 text-white">{item?.wallet}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-white">{item?.data?.last_price}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-white">{item?.data?.maker_fee}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 text-white">{item?.data?.taker_fee}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}