import {useEffect, useRef, useState } from "react";


export default function Channels({channel, setFavorites}){

  let refState = useRef(false);

  let [isFavorite, setIsFavorite] = useState(false); 

  function addToFav(){

    refState.current=!refState.current;

    setIsFavorite(prev=>{
      if(!prev) setFavorites(prevFav=>[channel, ...prevFav]); //Skickar in en array där den nuvarande kanalen läggs till i tidigare array av favoritkanaler genom spreadoperator ...prev.
      else setFavorites(prevFav=>prevFav.filter(ch=>ch.id != c.id)); //Om det tidigare statet för isfavorite var false betyder det att användaren nu vill ta bort kanalen från favorite. 
      console.log(isFavorite);
      return !prev
    });
    let c = {...channel} //Skapar en kopia av channel och sparar den som c. 
    console.log("Current ref state (favorited):", refState.current);
  }
    return(
        <div className="channel-container">
           <h1>{channel.name}</h1>

            <img src={channel.image} alt="" />

            <p><i>{channel.tagline}</i></p>

          <video controls>
            <source src={channel.liveaudio.url} type="audio/mp3"/>
          </video>

          <button onClick={addToFav} style={{color: isFavorite ? "red" : "white"}}>&#9829;</button>


          
            
        </div>

        

       
    )
}