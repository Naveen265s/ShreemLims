import React, { useState } from "react";
import Sop from "../sop/Sop";
import { TabView, TabPanel } from "primereact/tabview";
import "./ModuleTypes.scss";

function ModuleTypes() {
    const [activeIndex1, setActiveIndex1] = useState(1);
    return (
        <div>
            <TabView
                activeIndex={activeIndex1}
                onTabChange={(e) => setActiveIndex1(e.index)}
            >
                <TabPanel header="WorkFlow" className="workflow">
                    <h2>WorkFlow</h2>
                </TabPanel>
                <TabPanel header="Sop" className="sop">
                    <Sop />
                </TabPanel>
                <TabPanel header="Batch" className="batch">
                    <h2>At Hero</h2>
                </TabPanel>
                <TabPanel header="QMS" className="qms">
                    <h2>At Hero</h2>
                </TabPanel>
            </TabView>
        </div>
    );
}

export default ModuleTypes;
