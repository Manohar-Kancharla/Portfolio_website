import React,{useState} from 'react';
import Home from '../Pages/Home/Home';
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from 'react-icons/ai';
import "./Layot.css";
import Menus from './Menus/Menus';

const Layot = () => {
    const [toggle,setToggle]=useState(true);

    //change toggle
    const handleToggel=()=>{
        setToggle(!toggle);
    }
  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle?'sidebar-toggle':'sidebar'}>
            <div className='sidebar-toggle-icons'>
                
                <p onClick={handleToggel}>
                    {
                        toggle?
                        (
                        
                        <AiOutlineDoubleLeft size={30}/>
                        )
                        :(<AiOutlineDoubleRight size={30}/>)
                    }
                    
                </p>
                
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className='container'>
            <Home/>
        </div>
      </div>
    </>
  )
}

export default Layot;
