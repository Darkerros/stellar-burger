import React, {FC} from 'react';
import tabsStyles from "./tabs.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {ITabInfo} from "../../types/data/tab-info-interface";

interface IProps {
    className: string;
    tabInfoList: ITabInfo[]
    activeTab: string,
    setActiveTab: (tabname: string) => void,
}

// @ts-ignore
const Tabs:FC<IProps> = ({className, tabInfoList,activeTab,setActiveTab}) => {
    const setActiveTabAndScroll = (id:string) => {
        setActiveTab(id)
        // @ts-ignore
        document.querySelector('#'+id).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={className ? tabsStyles.Tabs + ' ' + className : tabsStyles.Tabs}>
            {tabInfoList.map((tabInfo) =>
                <Tab active={activeTab === tabInfo.id}
                     value={tabInfo.id}
                     key={tabInfo.id}
                     onClick={setActiveTabAndScroll}
                >
                    {tabInfo.name}
                </Tab>)}
        </div>
    );
};
export default Tabs;
