import "./Main.css";

function Main(props){
   return(
    <div className="Main-container">
        <h2> {props.heading} </h2>
        <div className="content-div">
         <p> {props.content} </p>



        </div>

    </div>
   );
}

export default Main;