<<<<<<< HEAD
import { useState, useEffect } from "react";

import * as Bosons from "../../bosons";
import * as Organisms from "../../organism";

interface IDashboardPage {};
export const Dashboard = (props: IDashboardPage) => {
    const [tab, setTab] = useState<number>(0);


=======

import { useEffect, useState } from "react";

import * as Bosons from "../../bosons";
import * as Organisms from "../../organisms"

interface IDashboardProps {}
export const Dashboard = (props: IDashboardProps) => {
    const [tab, setTab] = useState<number>(0);

>>>>>>> main
    const getComponent = () => {
        if (tab === 0) {
            return (<Organisms.Home />);
        }
<<<<<<< HEAD
        return (<Organisms.Wallet />);
    };

    return (
        <div className="flex grow flex-col w-full bg-gray-900 p-[20px] items-center">
            <Bosons.Tab 
                tab={tab}
                titles={["Home", "Wallet"]}
=======

        return (<Organisms.Wallet />);
    }

    return (
        <div className="flex grow p-[20px] overflow-y-clip bg-gray-700">
            <Bosons.Tab
                titles={["Home", "Wallet"]}
                tab={tab}
>>>>>>> main
                component={getComponent()}
                onTabChange={(index: number) => {
                    setTab(index);
                }}
            />
        </div>
    );
};