
import { useEffect, useState } from "react";

import * as Bosons from "../../bosons";
import * as Organisms from "../../organisms"

interface IDashboardProps {}
export const Dashboard = (props: IDashboardProps) => {
    const [tab, setTab] = useState<number>(0);

    const getComponent = () => {
        console.log(tab);
        if (tab === 0) {
            return (<Organisms.Home />);
        }

        return (<Organisms.Wallet />);
    }

    return (
        <div className="flex grow bg-gray-900 p-[20px] overflow-y-clip">
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