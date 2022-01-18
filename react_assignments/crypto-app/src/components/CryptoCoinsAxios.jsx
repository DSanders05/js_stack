import React, { useState } from 'react';
import axios from 'axios';


const CryptoCoinsAxios = ()=>{

    let [listOfCoins, setListOfCoins] = useState([]);
    
    const getCoins = ()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response)=>{
            console.log(response);
            console.log(response.data);
            setListOfCoins(response.data);
        })
        .catch((err)=>{    
            console.log("errrorrr!!!--->", err)    
        })
    }

    //fetch is a function that accepts an api endpoint (some link that gets us data from an api) and it returns a promise. What this means is that the response we get back from the api using fetch, will arrive to our application in an undetermined amount of time. This is called a promise. A promise is a pattern where the eventual response (and how long it will take to receive it) is not known.
    //.then means what to do when we eventually get the response back
        
    //.catch will run if there are any errors in the api that we are getting information from

    //in the amazon package example, this console.log is like us cooking breakfast. Even though we are expecting a package to come from Amazon, we don't exactly know when it will arrive. While we are waiting for the response from the api in the .then(), we can still run some other code so our application doesn't have to stop everything it's doing just to wait for a response from an api

    return (
        <div>
            <h3>Hello from crypto component</h3>
            <p><button onClick={getCoins}>Click to get crypto information</button></p>

            {
                listOfCoins.map((coinObj, index)=>{
                    return (
                        <div>
                            <h3>{coinObj.name}</h3>
                            <p>{coinObj.current_price}</p>
                            <img src={coinObj.image} alt="" />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default CryptoCoinsAxios;