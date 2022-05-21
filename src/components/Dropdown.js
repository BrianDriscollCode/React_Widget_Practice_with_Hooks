import React, { useState, useEffect, useRef } from 'react'


const Dropdown = ( { label, options, selected, onSelectedChange } ) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    
    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);
    
    //maps out the options but also
    //onClick selects the option "itself" 
    //and inserts it into the setSelected state changer in app.js
    const renderedOptions = options.map((option) => {
        
        //removes the value from the drop down
        if (option.value === selected.value) {
            return null;
        }


        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)} //is setSelected in app.js which is 'state'
                > 
                {option.label}
            </div>
        )
    });

    
    console.log(ref.current)

    return (

        <div ref={ref} className='ui form'> 
            <div className="field">
                <label className='label'> {label} </label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}> {/* Ternary for opening and closing drop down */}
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu  ${open ? 'visible transition' : '' }`}> {/* Ternary for opening and closing drop down */}
                        {renderedOptions}
                    </div> 
                </div>
            </div>
        </div>

    )

}

export default Dropdown