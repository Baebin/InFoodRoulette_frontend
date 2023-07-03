import {useState} from "react";

const colorEntropy = [Math.floor(Math.random() * 100)+50,Math.floor(Math.random() * 100)+50,Math.floor(Math.random() * 100)+50];
//console.log("Your color entropy is",colorEntropy)
// for(let indx=0;indx<10;indx++){ // random colorizer
//     console.log(`#${(indx*colorEntropy[0]%256).toString(16)}${(indx*colorEntropy[1]%256).toString(16)}${(indx*colorEntropy[2]%256).toString(16)}`)
// }

function Roulette({items}){
    
    const [rotation,setRotation] = useState(0);

    function Wheel(){
        if(items.length>=3){
            return(
                <>
                    {items.map((item,indx) => 
                        <li key={indx} style={{backgroundColor: //random colors :D
                            `#${((indx+1)*colorEntropy[0]%256 > 10 ? (indx+1)*colorEntropy[0]%256 : 256-(indx+1)*colorEntropy[0]%256).toString(16)}${((indx+1)*colorEntropy[1]%256 > 10 ? (indx+1)*colorEntropy[1]%256 : 256-(indx+1)*colorEntropy[1]%256).toString(16)}${((indx+1)*colorEntropy[2]%256 > 10 ? (indx+1)*colorEntropy[2]%256 : 256-(indx+1)*colorEntropy[2]%256).toString(16)}`,
                            border:"solid",transform:`rotate(${(indx*360/items.length)-rotation}deg) skewY(${360/items.length-90}deg)`}}>
                        <label className="text" style={{top:`${58+2*items.length}%`,width:`${265-4.8*items.length}%`,fontSize:`${60-2.5*items.length}px`,transform:`skewY(-31deg) rotate(60deg)`}}>{item}</label>
                    </li>)}
                </>
            );
        }
        else if(items.length===2){
            return(
                <>
                    {items.map((item,indx) => 
                        <li key={indx} style={{backgroundColor: //random colors :D
                            `#${((indx+1)*colorEntropy[0]%256 > 10 ? (indx+1)*colorEntropy[0]%256 : 256-(indx+1)*colorEntropy[0]%256).toString(16)}${((indx+1)*colorEntropy[1]%256 > 10 ? (indx+1)*colorEntropy[1]%256 : 256-(indx+1)*colorEntropy[1]%256).toString(16)}${((indx+1)*colorEntropy[2]%256 > 10 ? (indx+1)*colorEntropy[2]%256 : 256-(indx+1)*colorEntropy[2]%256).toString(16)}`,
                            border:"solid",transform:`rotate(${(indx*360/items.length)-rotation}deg) translate(0,50%)`,left:"50%",top:"-51.5%"}}>
                            <label className="text" style={{top:`-75%`,width:`235%`,fontSize:`60px`,transform:"skewY(-0deg) rotate(90deg)"}}>{item}</label>
                        </li>)
                    }
                </>
            );
        }
        else if(items.length===1){
            return(
                <>
                    {items.map((item,indx) => 
                        <li key={indx} style={{backgroundColor: //random colors :D
                            `#${((indx+1)*colorEntropy[0]%256 > 10 ? (indx+1)*colorEntropy[0]%256 : 256-(indx+1)*colorEntropy[0]%256).toString(16)}${((indx+1)*colorEntropy[1]%256 > 10 ? (indx+1)*colorEntropy[1]%256 : 256-(indx+1)*colorEntropy[1]%256).toString(16)}${((indx+1)*colorEntropy[2]%256 > 10 ? (indx+1)*colorEntropy[2]%256 : 256-(indx+1)*colorEntropy[2]%256).toString(16)}`,
                            border:"solid",transform:`rotate(${(indx*360/items.length)-rotation}deg) translate(-50%,50%)`,left:"50%",top:"-51.5%"}}>
                            <label className="text" style={{left:'-150%',top:`-75%`,width:`235%`,fontSize:`60px`,transform:"skewY(-0deg) rotate(90deg)"}}>{item}</label>
                        </li>)
                    }
                </>
            );
        }
        else{
            return(<p style={{backgroundColor:"#fff"}}></p>)
        }
    };

    function Button() {
        //alert(`당첨: ${items[Math.floor(rotation/(360/items.length))]}`)
        return (
            <div>
                <p style={{fontSize:"30px",fontWeight:"bolder"}}>오늘의 픽: {items[Math.floor(rotation/(360/items.length))]}</p>
                <button onClick={() => rtd()} style={{fontSize:"20px",fontWeight:"bold",border:"solid",height:"35px"}}>
                    !룰렛 돌리기!
                </button>
            </div>
        );
    };

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
                    <Wheel />
                </ul>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                <img src="../imgs/a1.png" alt="a1" />
                <Button />
                <img src="../imgs/b1.png" alt="b1" />
            </div>
        </>
    )

}


export default Roulette;