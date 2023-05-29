import {useState} from "react";
//import items from "./Items";

const colorEntropy = [Math.floor(Math.random() * 100)+50,Math.floor(Math.random() * 100)+50,Math.floor(Math.random() * 100)+50];
console.log("Your color entropy is",colorEntropy)
// for(let indx=0;indx<10;indx++){ // random colorizer
//     console.log(`#${(indx*colorEntropy[0]%256).toString(16)}${(indx*colorEntropy[1]%256).toString(16)}${(indx*colorEntropy[2]%256).toString(16)}`)
// }

// const initItem = items;
// console.log(initItem)

let initItem = ['치킨','밥','분식','짜장','파스타','초밥','피자','족발','고기','보쌈'];
//initItem = ['치킨','밥','분식']

function Roulette(){
    const [items,] = useState(initItem);
    const [rotation,setRotation] = useState(0);

    function Button() {
        //alert(`당첨: ${items[Math.floor(rotation/(360/items.length))]}`)
        return (
            <div>
                <p>winner: {items[Math.floor(rotation/(360/items.length))]}</p>
                <button onClick={() => rtd()}>
                    Spin the Wheel
                </button>
            </div>
        );
    }

    function rtd(){
        const winner = Math.floor(Math.random()*items.length);
        const rot = winner*360/items.length+Math.floor(Math.random()*(360/items.length))
        //console.log(items[winner],rot)
        setRotation(rot);
    }


    return(
        <>
            <div className="roulette" style={{height:"500px",width:"500px"}}>
                <ul className="roulette-group" style={{padding:"0", listStyle:"none"}}>

                    {items.map((item,indx) => 
                    <li style={{backgroundColor: //random colors :D
                        `#${((indx+1)*colorEntropy[0]%256 > 10 ? (indx+1)*colorEntropy[0]%256 : 256-(indx+1)*colorEntropy[0]%256).toString(16)}${((indx+1)*colorEntropy[1]%256 > 10 ? (indx+1)*colorEntropy[1]%256 : 256-(indx+1)*colorEntropy[1]%256).toString(16)}${((indx+1)*colorEntropy[2]%256 > 10 ? (indx+1)*colorEntropy[2]%256 : 256-(indx+1)*colorEntropy[2]%256).toString(16)}`,
                    border:"solid",transform:`rotate(${(indx*360/items.length)-rotation}deg) skewY(${360/items.length-90}deg)`}}>
                        <label className="text">{item}</label>
                    </li>)}
                </ul>
            </div>
            <Button />
        </>
    )

}


export default Roulette;