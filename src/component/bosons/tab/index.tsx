import React from "react";

interface ITabProps {
    tab: number,
    titles: string[],
    component: React.ReactNode,
    onTabChange: (index: number) => void
};

export const Tab = (props: ITabProps) => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex flex-row mb-[20px]  w-full justify-around">

                {
                    props?.titles?.map((title: string, index: number) => {
                        return (
                            <button 
                                key={index} 
                                className="flex w-full p-[10px] mr-[5px] bg-black text-white text-center "
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e?.preventDefault();
                                    props?.onTabChange(index);
                                }}
                            >
                                {title}
                            </button>
                        );
                    })
                }
            </div>
            <div className="flex grow">
                {props?.component}
            </div>
        </div>
    );
}

