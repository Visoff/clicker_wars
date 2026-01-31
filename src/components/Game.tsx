import Button from './Button';
import React, { useState } from "react";
import CloseScreen from './Close';
const GameScreen: React.FC=()=>{
    const handleClick = () => {
        console.log('кнопка нажата!');
        }
    const [close,setClose] = useState(false);
        if (close) {
            return <CloseScreen/>
        }
return (
   <div>
      <Button text="Партия Порядка" onClick={handleClick}/>
      <Button text="Партия Перемен" onClick={handleClick}/>

      <button onClick={()=>setClose(true)}>Закрыть участок</button>
   </div>
   
)
}

export default GameScreen;