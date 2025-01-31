import React from "react";

interface ITabProps {
    tab: number,
    titles: string[],
    component: React.ReactNode,
    onTabChange: (index: number) => void
};

export const Tab = (props: ITabProps) => {


    return (
        <div className="flex grow flex-col w-full">
            <div className="flex flex-row justify-around items-center mb-[10px]">
                {
                    props?.titles?.map((title: string, index: number) => {
                        return (
                            <button 
                                key={index} 
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e?.preventDefault();

                                    props?.onTabChange(index);
                                }}
                                className="flex w-full p-[20px] mr-[10px] text-black text-center">
                                    {title}
                            </button>
                        );
                    })
                }
            </div>

            <div className="flex grow bg-black w-full">
                { props?.component }
            </div>

           
        </div>
    );
};