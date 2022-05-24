import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ( {language, text} ) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState('text');


    useEffect(() => {

        const timerId = setTimeout(() => {

            setDebouncedText(text);


        }, 500); 

        return () => {

            clearTimeout(timerId);

        }

    }, [text]) 

    useEffect(() => {

        const doTranslation = async () => {

            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', 
                {}, 
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                }
            );

            setTranslated(data.data.translations[0].translatedText)
        }

        

        //this is a post request. 
        //hence the 2nd empty object for the "body"
        //but we still use the 3rd object for parameters
        doTranslation();

    }, [language, debouncedText])

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>    
    )

}

export default Convert