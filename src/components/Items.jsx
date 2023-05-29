import {useState} from "react";

let initItem = [
    'option 1',
    'option 2',
    'option 3',
  ];


function Items(){
    const [items,setItems] = useState(initItem);

    function pushItems(item){
        //console.log(item);
        
        setItems([...items, item]);
    }

    function popItems(indx){
        let tempit = [];
        for(let i=0;i<items.length;i++){
            if(i === indx) i++;

            tempit.push(items[i]);

        }
        setItems(tempit);
    }

    const handleChange = (event,indx) => {
        const tems = document.getElementsByClassName("items")
        let tempit = []
        for(let i=0;i<tems.length;i++){
            tempit.push((i === indx ? event.target.value : tems[i].value))
        };
        setItems(tempit);
    
      };

    // function applyItems(){ // value -> item
    //     const tems = document.getElementsByClassName("items")
    //     let tempit = []
    //     for(let i=0;i<tems.length;i++){
    //         console.log(tems[i].value)
    //         tempit.push(tems[i].value)
    //     };
    //     console.log(tempit)
    //     setItems(['1','2','3']);
    //     console.log(items)
    // }

    // function initItems(){ // item -> value
    //     //console.log("initing")
    //     const tems = document.getElementsByClassName("items")
    //     for(let i=0;i<tems.length;i++){
    //         tems[i].value = items[i]
    //     };
    // }


    return(
        <ul className="list-group" style={{padding:"0",display:"flex",flexDirection:"column",listStyle:"none",alignItems:"center"}}>
            {items.map((item,indx) => 
            <li>
                <label>
                    <input key={item} className="items" type="text" value={item} onChange={(e)=>{handleChange(e,indx)}}/><button onClick={()=>{popItems(indx)}}>-</button>
                </label>
            </li>)}
            <li style={{margin:"5px"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <button onClick={()=>{pushItems('')}}>+</button>
                </div>
            </li>
        </ul>
    )
}

/*
<button onClick={()=>{initItems()}}>o</button>
<div style={{width:"10px"}} />
<button onClick={()=>{pushItems('')}}>+</button>
<div style={{width:"10px"}} />
<button onClick={()=>{applyItems()}}>{"=>"}</button>
*/





export default Items;