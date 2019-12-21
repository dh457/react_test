import React, { useState, useEffect, MouseEvent, MouseEventHandler, useRef } from 'react';
import { string, any } from 'prop-types';

interface IMouse{
    className :string;    

}
interface IMousePOS{
    xPos: number;
    yPos: number; 
}
type Props = IMouse;
 const MusePosition:React.FC=() =>{
    
    const [mousePos, setMousePos] = useState<IMousePOS>({xPos:0,
                                                        yPos:0,    
    })
    const [counter, setCounter] = useState(0);
    const handleMouseMove = (e:any)  =>{ 
            
        setMousePos(
            {xPos:e. clientX, yPos:e.clientY}
        ) 
    }
    const mousePosRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
              window.addEventListener("onmousemove",handleMouseMove)
        
         return () => {
            window.removeEventListener("onmousemove",handleMouseMove)
         };
    
      },[]);
    
    const onButtonClick=(e:any)=>{
        setCounter(counter+1);
        mousePosRef.current.value = "daniel";
        
    }
    return(
        <div className="Mouse">
           <input type="text" ref={mousePosRef} defaultValue= {mousePos.xPos}/>
            <div>number click {counter}</div>
           <button onClick={onButtonClick} >Press On Me</button>

        </div>
    )
}
export default MusePosition;