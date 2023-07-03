import {useState} from "react";

const filterItems = [
    ["전부","한식","중식","일식","양식"],
    ["전부","★☆☆☆☆이상","★★☆☆☆이상","★★★☆☆이상","★★★★☆이상"],
    ["전부","배달가능","배달불가"],
  ];

const selectedIndx = [ // made this so we can easily expand filters
    0,
    0,
    0
]


function Filters({setItems}){
    const [filterIndxes,setfilterIndxes] = useState(selectedIndx);
    
    
    const switchFilter = (indx,approach) =>{
        //approach = -1 or 1, -1 is prev and 1 is next
        let curIndx = filterIndxes[indx];
        let selectedIndx = []
        for(let i =0;i<filterIndxes.length;i++){
            selectedIndx.push(filterIndxes[i])
        }

        if(0 <= curIndx+approach && curIndx+approach < filterItems[indx].length){
            selectedIndx[indx] = curIndx+approach;
            setfilterIndxes(selectedIndx);
        }

    }

    const applyFilter = () =>{
        setItems(filterIndxes)
    }

    return(
        <div>
            <ul className="list-group" style={{padding:"0",display:"flex",flexDirection:"column",listStyle:"none",alignItems:"center"}}>
                {filterIndxes.map((filterindx,indx) => 
                <li key={indx} style={{display:"flex",flexDirection:"row",width:"90%",justifyContent:"space-between"}}>
                    <button onClick={()=>{switchFilter(indx,-1)}}>{"<"}</button>
                    <label style={{fontWeight:"bold",fontSize:"16px"}}>{filterItems[indx][filterindx]}</label>
                    <button onClick={()=>{switchFilter(indx,1)}}>{">"}</button>
                </li>)}
                <li>
                    <button onClick={()=>{applyFilter()}}>필터적용</button>
                </li>
            </ul>
            <p style={{height:"380px"}} />
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <img src="../imgs/a2" alt="a2" />
                    <img src="../imgs/b2" alt="b2" />
                </div>
            </div>
        </div>
    )
}



export default Filters;