import React, { useState } from 'react';
import WelcomeScreen from './Welcome';
const CloseScreen: React.FC = () => {
    const [general,setGeneral] = useState(false);
    if (general){
        return <WelcomeScreen/>
    }
    return (
       <div>   
        <button onClick={()=>setGeneral(true)}>вернуться</button>
       </div>
    )
}



export default CloseScreen;