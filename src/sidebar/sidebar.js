import React from "react";
import "./sidebar.css";
import Building from "../building/building";


const Sidebar = ({ buildings }) => {
    return <aside className="Sidebar">
        {buildings.map(build => <Building building={build} key={build.name}/>)}
    </aside>
}

export default Sidebar;