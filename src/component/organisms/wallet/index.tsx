
import { Key, useEffect, useState } from "react";
import { 
    useAccount, 
    useConnect, 
    useDisconnect
} from "wagmi"
import Web3 from "web3";

interface IWalletProps {};
export const Wallet = (props: IWalletProps) => {
    const { address, isConnected } = useAccount();
    const { connectors, connect, isPending } = useConnect();
    const { disconnect } = useDisconnect();

    const [balance, setBalance] = useState<null | string | bigint>(null);
    
    useEffect(() => {
        if (address) {
            getBalance(address);
        }
    }, [address]);

    const getBalance = async (address: string) => {
        var web3 = new Web3(window.ethereum);
        var balance = await web3.eth.getBalance(address);
       
        if (balance) {
            setBalance(balance);
        } else {
            setBalance(null);
        }
    };

    if (isConnected) {
        return (
            <div className="flex grow p-[20px] overflow-y-clip bg-gray-700 justify-center items-center flex-col">
                <img className="flex h-[200px]" src={require('../../../assets/metamask.svg')} />
                <div className="flex text-white">Connected to {address}</div>
                <div className="flex text-white">Balance: {balance?.toString() || 0.00}</div> 
                <button className="flex text-white" onClick={() => disconnect()}>Disconnect</button>
            </div>
        );
    }

    return (
        <div className="flex grow p-[20px] overflow-y-clip bg-gray-700 justify-center items-center flex-col">
            <img className="flex h-[200px]" src={require('../../../assets/metamask.svg')} />
            {connectors.map((connector: { uid: Key | null | undefined; name: any; }) => {
                return (
                    <button
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        disabled={isPending}
                        className="flex text-white"
                    >
                        {isPending ? "Connecting..." : `Connect ${connector.name}`}
                    </button>
                );
            })}
        </div>
    );
}