import Channels from "./Channels";
import Favorites from "./Favorites";

export default function Main(){
    return(
        <>
            <div className="pages" id="channels">
                <Channels></Channels>
            </div>

            <div className="pages" id="favorites">
                <Favorites></Favorites>
            </div>
        </>
    )
}