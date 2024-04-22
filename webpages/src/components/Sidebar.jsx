import "./Sidebar.css"


function Sidebar(props){
    return(
        <div className="sidebar" >

        <div className="sidebar-item-div" onClick={()=>{props.handleClick(0)}}>
            <span className="sidebar-item">Introduction</span>
            </div>

         <div className="sidebar-item-div" onClick={()=>{props.handleClick(1)}}>
            <span className="sidebar-item">Get Started</span>
            </div>

        <div className="sidebar-item-div" onClick={()=>{props.handleClick(2)}}>
            <span className="sidebar-item">Output</span></div>

        <div className="sidebar-item-div" onClick={()=>{props.handleClick(3)}}>
            <span className="sidebar-item">Statement</span></div>

        <div className="sidebar-item-div" onClick={()=>{props.handleClick(4)}}>
            <span className="sidebar-item">Syntax</span></div>

        <div className="sidebar-item-div" onClick={()=>{props.handleClick(5)}} >
            <span className="sidebar-item">Comments</span></div> 

        </div>
    );
}

export default Sidebar;