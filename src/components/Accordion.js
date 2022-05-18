import React, { useState } from 'react'

const Accordion = ({ items }) => {

    //not an array, destructuing 'useState'
    //activeIndex is the 'state'
    //setActiveIndex is the function to update the 'state' which also sets of rerender
    //useState is the value being destructured and sets the initial state to 'null'
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>

            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
            
        </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion"> 
            {renderedItems} 
        </div> 
    )

}

export default Accordion