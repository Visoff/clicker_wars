import React, { useState } from "react";
import GameScreen from './Game';

const WelcomeScreen: React.FC = () => {
    const [start, setStart] = useState(false);
     if (start) {
        return <GameScreen/>
     }

    return(
        <div>
            <h1>WARS</h1>
            <button onClick={()=>setStart(true)}>Открыть участок</button>
        </div>
    )
}
export default WelcomeScreen;