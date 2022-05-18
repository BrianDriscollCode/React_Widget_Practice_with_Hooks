import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

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

const App = () => {

    return (
        
            <Search />
    
    ) 

}

export default App