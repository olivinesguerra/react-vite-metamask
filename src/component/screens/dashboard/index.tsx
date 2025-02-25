

import { useState } from "react";

import * as Bosons from "../../bosons";
import * as Organisms from "../../organisms"

interface IDashboardProps {}
export const Dashboard = (props: IDashboardProps) => {
    const [tab, setTab] = useState<number>(0);


    const getComponent = () => {
        if (tab === 0) {
            return (<Organisms.Home />);
        }

        return (<Organisms.Wallet />);
    }

    return (
        <div className="flex grow p-[20px] overflow-y-clip bg-gray-700">
            <Bosons.Tab
                titles={["Home", "Wallet"]}
                tab={tab}
                component={getComponent()}
                onTabChange={(index: number) => {
                    setTab(index);
                }}
            />
        </div>
    );
};