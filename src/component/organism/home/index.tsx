
import {useState, useEffect} from "react";
import axios from "axios";

import _ from "lodash";

interface IHomeProp {};
export const Home = (props: IHomeProp) => {
    const [data, setData] = useState<{ wallet: string; data: any; }[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://api.energiswap.exchange/v1/assets');
            const { data } = res;

            let tempData: { wallet: string; data: any; }[] = [];

            _.each( data, ( val: any, key: string ) => { 
                tempData.push({wallet: key, data: val });
            });

            setData(tempData);
            console.log(tempData); 
        };

        getData();
    },[]);

    return (
        <div className="flex grow bg-white">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table
                        className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead
                        className="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">First</th>
                        <th scope="col" className="px-6 py-4">Last</th>
                        <th scope="col" className="px-6 py-4">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Mark</td>
                        <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                        </tr>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td className="whitespace-nowrap px-6 py-4">@fat</td>
                        </tr>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td className="whitespace-nowrap px-6 py-4">Larry</td>
                        <td className="whitespace-nowrap px-6 py-4">Wild</td>
                        <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};