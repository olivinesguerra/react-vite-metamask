
import { MetaMaskSDK } from "@metamask/sdk";
import { Key, useEffect } from "react";
import { 
    useAccount, 
    useConnect, 
    useDisconnect,
    useReadContract
} from "wagmi"

const MMSDK = new MetaMaskSDK({
    dappMetadata: {
      name: "Example JavaScript Dapp",
      url: window.location.href,
    },
    infuraAPIKey: process.env.REACT_APP_INFURA_API_KEY,
});

interface IWalletProps {};
export const Wallet = (props: IWalletProps) => {
    const { address, isConnected, chainId, chain, connector, isReconnecting, status } = useAccount();
    const { connectors, connect, isPending } = useConnect();
    const { disconnect } = useDisconnect();
    
    const { 
        data: balance,
        isError,
        isLoading 
      } = useReadContract({
        address: address,
        abi: [
          {
            name: "balanceOf",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "owner", type: "address" }],
            outputs: [{ name: "balance", type: "uint256" }],
          },
        ],
        functionName: "balanceOf",
        args: ["0x03A71968491d55603FFe1b11A9e23eF013f75bCF"],
    });

    useEffect(() =>{
        const getUserAccount = async () => {
            const acc = await connector?.getAccounts();
            return acc;
        };

        if (isConnected) {
            getUserAccount();
        }
    },[isConnected]);

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