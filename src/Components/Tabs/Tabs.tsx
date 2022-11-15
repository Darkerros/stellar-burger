import React from 'react';
import tabsStyles from "./Tabs.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

// @ts-ignore
const Tabs = ({className, tabInfoList,activeTab,setActiveTab}) => {
    // @ts-ignore
    const setActiveTabAndScroll = (id) => {
        setActiveTab(id)
        // @ts-ignore
        document.querySelector('#'+id).scrollIntoView({ behavior: "smooth" })
    }
    // @ts-ignore
    return (
        <div className={className ? tabsStyles.Tabs + ' ' + className : tabsStyles.Tabs}>
            {tabInfoList.map((tabInfo: { id: string; name: string }, index: number) =>
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