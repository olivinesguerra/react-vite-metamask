import { useEffect } from "react";
import axios from "axios";

interface IWalletProp {};
export const Wallet = (props: IWalletProp) => {

    useEffect(() => {
        const getData = async () => {
            const res = await axios?.get("https://api.energiswap.exchange/v1/assets");
            const { data } = res;
            console.log(data);
        };

        getData();
    }, []);

    return (
        <div className="flex grow bg-gray-900">

        </div>
    );
};