
import './App.css';
import {useState} from "react";
import Items from "./components/Items";
import Roulette from "./components/Roulette";



function App() {

  const [displayPop, setDisplay] = useState("none");


  return (
    <div className = "App" style={{flexDirection:'column',height:"100%"}}>
      <div className="App-header" style={{height:"50px",flexDirection:'row',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="menu-icon" style={{width:"70px"}} onClick={() => {setDisplay(displayPop === "none" ? "flex" : "none");}}>Menu Icon</div>
        <div style={{width:"100%"}}>
          <div className="name">Inha Food Roulette</div>
        </div>
        <div style={{width:"70px"}}></div>
      </div>
    
      <div className="bottom-wrapper" style={{display:"flex",height:"100%",flexDirection:'row',justifyContent:"center"}}>
        <div className="menu" id="menu" style={{display:displayPop,width:"300px",flexDirection:'column'}}>
          <Items />
        </div>
        <div className="roluette-wrapper" style={{display:"flex",height:"100%",width:"100%",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          
          <Roulette />
          
        </div>
      </div>
    </div>
  );
}

export default App;
