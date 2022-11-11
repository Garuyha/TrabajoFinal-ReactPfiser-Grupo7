import "../cssEzequiel/CartaUnica.css"
import {Howl, Howler} from "howler"

export default function CartaUnica({carta, resolverEleccion, volteada, desabilitada}){
    
    const resolverClick = () => {
        if(!desabilitada){
            resolverEleccion(carta)           
            SoundPlay(carta.sonido)
        }
    }
    
    const SoundPlay = (src) =>{
        const sound = new Howl({
            src
        })
        sound.play();
    }
    
    Howler.volume(0.5)
    return(
        <div className = "carta">
            <div className ={volteada ? "volteada" : "noVolteada"}>
                <img className = "frente" src ={carta.src} alt = "frente carta"/>
                
                <img 
                    className = "atras" 
                    src = "./assetsEzequiel/cover.png" 
                    onClick={resolverClick} 
                    alt = "atras carta"/>
            </div>
        </div>
    )
}