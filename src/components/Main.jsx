import Channels from "./Channels";
import Favorites from "./Favorites";
import { useEffect,useState } from "react";
import Home from "./Home";

export default function Main(){

    useEffect(()=>{ //useEffect som en eventListener som lyssnar efter ändring för till exempel en variabel
        getChannels();
      }, [])
    
    
    let [channels, setChannels] = useState([]);
    let [favorites, setFavorites] = useState([]);
    let [isHome, setIshome] = useState([false]);

    useEffect(() => {
        setIshome(true); 
          window.location.hash = '#home';
      }, []);
    
    async function getChannels(){
        let res = await fetch("https://api.sr.se/api/v2/channels/?format=json");
        let data = await res.json();
    
        setChannels(data.channels);
      }

    return(
        <>
            <Home></Home>
            <div className="pages" id="channels">
                {channels.map(c=>(
                      <Channels channel={c} key={c.id}></Channels>
                ))}
              
            </div>

            <div className="pages" id="favorites">
                <Favorites></Favorites>
            </div>
        </>
    )
}