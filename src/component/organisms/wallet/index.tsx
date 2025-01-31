
import { MetaMaskSDK } from "@metamask/sdk";

const MMSDK = new MetaMaskSDK({
    dappMetadata: {
      name: "Example JavaScript Dapp",
      url: window.location.href,
    },
    infuraAPIKey: process.env.REACT_APP_INFURA_API_KEY,
});

interface IWalletProps {};
export const Wallet = (props: IWalletProps) => {
    return (
        <div className="flex grow w-full h-full bg-orange-500">
            
        </div>
    );
}