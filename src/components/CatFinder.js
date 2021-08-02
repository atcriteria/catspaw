import {useState, useEffect} from 'react';
import axios from 'axios';

export default function CatFinger(){
    const [imgURL, setImgURL] = useState("")
    const [fact, setFact] = useState("")
    const baseURL = 'https://cataas.com'

    const configureImage = (url) =>{
        if (typeof(url) === 'string'){
            setImgURL(baseURL+url)
        }
    }

    console.log(`new imgurl = ${imgURL}`)
    useEffect(() => {
        axios.get('https://cataas.com/cat?json=true')
        .then(res => {
            console.log(res.data.url)
            configureImage(res.data.url)
        })
        .catch(err => {
            console.log(err)
        })
        axios.get('https://catfact.ninja/fact')
        .then(res => {
            setFact(res.data.fact)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return(
        <div className="cat-finder-wrapper">
            <div className="cat-finder">
                <img id="cat-photo" src={imgURL} alt="Cat photograph from the Cats As A Service API" />
                <p>{fact}</p>
            </div>
        </div>
    )
}