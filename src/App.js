
import './App.css';
import React, {useState} from "react";
import Items from "./components/Items";
import Roulette from "./components/Roulette";
import Filters from "./components/Filters"

//import { useDispatch, useSelector } from 'react-redux';
//import { actionCreators } from './redux/modules/food';

const initItem = ['한식','중식','양식','일식'] // 룰렛 및 메뉴-아이템의 초기 상태,, 바꿔도 됨

function App() {
  const [displayPop, setDisplay] = useState("none")
  const [foodItems, setfoodItems] = useState(initItem)

  //const dispatch = useDispatch();

  const GetFoods = (indxList) =>{
    //let items = [] //useSelector(state => state.food.foods)
    // from indxList here #[1,2,0]
    // use the indxList to get string list and put it into items
    // items.push(1)

    fetch(`http://localhost:8080/api/get/foods?type=${indxList[0]}&rate=${indxList[1]}&delivery=${indxList[2]}`, {method: "GET"})
    .then(res => res.json())
    .then(items => {
      console.log(items)
      setfoodItems(items)
    })
    //dispatch(actionCreators.getFoodsAPI(indxList[0], indxList[1], indxList[2]))
    //setfoodItems(items);
    //setfoodItems(indxList); // test의 이유로 indxList를 보내게 함. db연결하면, 이 함수를 지우고 위 함수를 쓰셈
  }

  return (
    <React.Fragment>
    <div className = "App" style={{flexDirection:'column',height:"100%"}}>
      <div className="App-header" style={{height:"50px",flexDirection:'row',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="menu-icon" style={{width:"60px",padding:"5px",fontSize:"20px"}} onClick={() => {setDisplay(displayPop === "none" ? "flex" : "none");}}>룰렛 설정</div>
        <div style={{display:'flex',width:"100%",justifyContent:"center",alignItems:"center"}}>
          <div className="name" style={{padding:"5px",fontSize:"50px",fontWeight:"bolder",justifyContent:"center",alignItems:"center",border:"solid",height:"80px",backgroundColor:"#E0B660"}}>
            인후 맛집 룰렛 돌리기
          </div>
        </div>
        <div style={{width:"70px"}}></div>
      </div>
    
      <div className="bottom-wrapper" style={{display:"flex",height:"100%",flexDirection:'row',justifyContent:"center"}}>
        <div className="menu" id="menu" style={{display:displayPop,width:"300px",flexDirection:'column'}}>
          <Items inputList={foodItems} setInputList={setfoodItems}/>
        </div>
        <div className="roluette-wrapper" style={{display:"flex",height:"100%",width:"100%",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
          
          <Roulette items={foodItems} />
          
        </div>
        <div className="menu" id="menu2" style={{display:displayPop,width:"300px",flexDirection:'column'}}>
          <Filters setItems={GetFoods} />
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default App;
