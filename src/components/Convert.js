import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ( {language, text} ) => {

    useEffect(() => {

        //this is a post request. 
        //hence the 2nd empty object for the "body"
        //but we still use the 3rd object for parameters
        axios.post('https://translation.googleapis.com/language/translate/v2', 
        {}, 
        {
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })

    }, [language, text])

    return <div> </div>

}

export default Convert