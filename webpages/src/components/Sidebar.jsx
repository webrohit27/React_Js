import "./Sidebar.css"


function Sidebar(){
    return(
        <div className="sidebar">
        <div className="sidebar-item-div"><span className="sidebar-item">Introduction</span></div>
        <div className="sidebar-item-div"><span className="sidebar-item">Input</span></div>
        <div className="sidebar-item-div"><span className="sidebar-item">Output</span></div>
        <div className="sidebar-item-div"><span className="sidebar-item">Statement</span></div>
        <div className="sidebar-item-div"><span className="sidebar-item">Syntax</span></div>
        <div className="sidebar-item-div"><span className="sidebar-item">Comments</span></div>
        </div>
    );
}

export default Sidebar;