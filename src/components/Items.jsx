import {useState} from "react";


function Items({inputList, setInputList}) {
    const [currentInput, setCurrentInput] = useState('');
  
    const popItem = (indx)=>{
        if(inputList.length === 0){
            setInputList([])
        }
        else{
            let xlist = []
            for(let i=0;i<inputList.length;i++){
                if(i===indx){
                    i++;
                }
                if(i!==inputList.length){
                    xlist.push(inputList[i])
                }
            }
            setInputList(xlist)

        }
    };

    const handleInputChange = (event) => {
      setCurrentInput(event.target.value);
    };
  
    const handleInputKeyPress = (event) => {
      if (event.key === 'Enter') {
        if (currentInput === ""){
            setCurrentInput('');
        }
        else{
            setInputList([...inputList, currentInput]);
            setCurrentInput('');
        }
      }
    };
  
    const handleInputFocus = () => {
      setCurrentInput('');
    };
  
    return (
      <div>
        <ul className="list-group" style={{padding:"0",display:"flex",flexDirection:"column",listStyle:"none",alignItems:"center"}}>
             {inputList.map((item,indx) => 
             <li style={{width:"90%"}} key={indx}>
                 <label style={{border:"solid",width:"100%",height:"25px",display:"flex",flexDirection:"row",borderWidth:"3px",justifyContent:"space-between",backgroundColor:"#fff"}}>
                    <label key={indx} className="items" type="text" style={{alignItems:"center",justifyContent:"center"}}>{item}</label>
                    <button onClick={()=>{popItem(indx)}} style={{alignSelf: "flex-end"}}>-</button>
                 </label>
             </li>)}
        </ul>
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyPress}
          onFocus={handleInputFocus}
        />
      </div>
    );
}


export default Items;