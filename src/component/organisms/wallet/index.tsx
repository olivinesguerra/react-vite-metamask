
import { MetaMaskSDK } from "@metamask/sdk";
import { Key } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi"

const MMSDK = new MetaMaskSDK({
    dappMetadata: {
      name: "Example JavaScript Dapp",
      url: window.location.href,
    },
    infuraAPIKey: process.env.REACT_APP_INFURA_API_KEY,
});

interface IWalletProps {};
export const Wallet = (props: IWalletProps) => {
    const { address, isConnected } = useAccount();
    const { connectors, connect, isPending } = useConnect();
    const { disconnect } = useDisconnect();

    if (isConnected) {
        return (
            <div className="flex grow p-[20px] overflow-y-clip bg-gray-700 justify-center items-center flex-col">
                <img className="flex h-[200px]" src={require('../../../assets/metamask.svg')} />
                <div className="flex text-white">Connected to {address}</div>
                <button className="flex text-white" onClick={() => disconnect()}>Disconnect</button>
            </div>
        )
    }
    
    return (
        <div className="flex grow p-[20px] overflow-y-clip bg-gray-700 justify-center items-center flex-col">
            <img className="flex h-[200px]" src={require('../../../assets/metamask.svg')} />
            {connectors.map((connector: { uid: Key | null | undefined; name: any; }) => (
                <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    disabled={isPending}
                    className="flex text-white"
                >
                    {isPending ? "Connecting..." : `Connect ${connector.name}`}
                </button>
            ))}
        </div>
    );
}