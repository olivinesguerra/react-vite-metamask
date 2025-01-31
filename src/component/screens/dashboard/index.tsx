import { useState, useEffect } from "react";

import * as Bosons from "../../bosons";
import * as Organisms from "../../organism";

interface IDashboardPage {};
export const Dashboard = (props: IDashboardPage) => {
    const [tab, setTab] = useState<number>(0);


    const getComponent = () => {
        if (tab === 0) {
            return (<Organisms.Home />);
        }
        return (<Organisms.Wallet />);
    };

    return (
        <div className="flex grow flex-col w-full bg-gray-900 p-[20px] items-center">
            <Bosons.Tab 
                tab={tab}
                titles={["Home", "Wallet"]}
                component={getComponent()}
                onTabChange={(index: number) => {
                    setTab(index);
                }}
            />
        </div>
    );
};