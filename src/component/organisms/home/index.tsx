import {useState, useEffect} from "react";

import axios from "axios";
import _ from "lodash";

interface IHomeProps {}
export const Home = (props: IHomeProps) => {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://api.energiswap.exchange/v1/assets');
            const { data } = res;

            let tempData: { wallet: string; data: any; }[] = [];

            _.each( data, ( val, key ) => { 
                tempData.push({wallet: key, data: val });
            });

            setData(tempData);
            console.log(tempData); 
        };

        getData();
    },[]);


    return (
        <div className="flex grow bg-gray-700">
            {/* <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Avatar</Table.HeadCell>
                    <Table.HeadCell>Pilot Name</Table.HeadCell>
                    <Table.HeadCell>Owner Name</Table.HeadCell>
                    <Table.HeadCell>Start Date</Table.HeadCell>
                    <Table.HeadCell>Location</Table.HeadCell>
                    <Table.HeadCell>Aircrafts</Table.HeadCell>
                    <Table.HeadCell>Trip Action</Table.HeadCell>
                </Table.Head>
            </Table> */}
        </div>
    );
}