export default function Favorites({channel}){
    return(
    <div className="channel-container">
           <h1>Din Favorit:{channel.name}</h1>

            <img src={channel.image} alt="" />

            <p><i>{channel.tagline}</i></p>

          <video controls>
            <source src={channel.liveaudio.url} type="audio/mp3"/>
          </video>
    </div>
    )
}