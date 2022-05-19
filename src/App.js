import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown';

const items = [

    {
        title: 'What is React?',
        content: "React is a front end javascript framework"
    },
    {
        title: 'Why use React?',
        content: "React is liked a lot among engineers"
    },
    {
        title: 'How do you use React?',
        content: "It is used by creating components"
    }

];

const options = [

    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    },

];

const App = () => {

    const [selected, setSelected] = useState(options[0])

    return (
        
            <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected}
                options={options} 
            />
    
    ) 

}

export default App