import { useState } from "react";
import calcularTempo from "../CalculoHora/CalculoHora";
import style from "./styles.module.css"
// import { UserContext } from "../../stores/UserContext";

interface UserLogado {
    id: number;
    nome: string
    foto: string
    comentario: string
    likes: number
    data: string
    onDelete?: () => void;
}

export default function Comentario(props: UserLogado) {
    const [ContadorLike, setContadorLike] = useState<number>(props.likes)
    const [ContadorLikeVerify, setVerifyLike] = useState(false)
    // const UserData = useContext(UserContext)
    
    function aumentarLike() {
        
        // if(!UserData){
        //     return
        // }
        
        
        // if(UserData.id!=props.id){
            setContadorLike((currentState) => currentState + 1)
            setVerifyLike(true)
        // }else{
        //     alert("Você não pode dar like em seu próprio comentario :p")
        // }
        
    }
    function tiratLike() {

        setContadorLike((currentState: number) => currentState - 1)
        setVerifyLike(false)
    }

    const horariouser: string | undefined = props.data;

    return (
        <div className={style.coment}>
            <img src={props.foto} alt="" />
            <div >
                <div className={style.texto}>
                    <h3>{props.nome}</h3>
                    <button className={style.lixeira} onClick={props.onDelete} ></button>
                    <p>{calcularTempo(horariouser) ==="Agora mesmo"?"Agora mesmo":`Cerca de ${calcularTempo(horariouser)}` }</p>
                    <p>{props.comentario}</p>
                </div>
                <div className={style.likes}>

                    {ContadorLikeVerify ? (
                        <button className={style.botaoLikeAzul} onClick={tiratLike}></button>
                    ) : <button className={style.botaoLike} onClick={aumentarLike}></button>}
                    {ContadorLikeVerify ? (
                        <p><strong className={style.LikeTextoAzul}>Like • {ContadorLike}</strong></p>
                    ) : <p><strong className={style.LikeTexto}>Like • {ContadorLike}</strong></p>}


                </div>
            </div>

        </div>
    )
}